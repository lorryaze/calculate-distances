from http.client import HTTPException
import sqlite3
import requests
from geopy.distance import geodesic
from .db import get_db
from .models import DistanceRequest # improving code latter just to remember 


import time


async def calculate_distance(source: str, destination: str) -> float:
    """
    Calculates the distance in kilometers between two addresses using their coordinates.

    Args:
        source (str): The source address.
        destination (str): The destination address.

    Returns:
        float: The distance between the two addresses in kilometers.
    """
   
    source_coords = get_coordinates(source)
    destination_coords = get_coordinates(destination)

    distance = geodesic(source_coords, destination_coords).kilometers

    create_distance(source, destination, distance)

    return distance

def get_coordinates(address):
    """
    Fetches the latitude and longitude of a given address using the Nominatim API.

    Args:
        address (str): The address to geocode (e.g., "Rua Augusta, São Paulo, Brasil").

    Returns:
        tuple[float, float]: A tuple containing the latitude and longitude of the address.

    Raises:
        ValueError: If the API request fails (e.g., network issues or invalid response).
        HTTPException: If the address is not found or the API returns no results.
    """

    url = "https://nominatim.openstreetmap.org/search"
    headers = {
        "User-Agent": "YourAppName/1.0 (your@email.com)"  #smart code
    }
    params = {"q": address, "format": "json", "limit": 1}

    time.sleep(1)

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise ValueError(f"Error fetching coordinates: HTTP {response.status_code}")

    data = response.json()

    if not data:
        raise HTTPException(status_code=404, detail="Address not found")

    latitude = float(data[0]["lat"])
    longitude = float(data[0]["lon"])

    return (latitude, longitude)

def create_distance(source, destination, distance):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO distances (source_address, destination_address, distance)
        VALUES (?, ?, ?)
    ''', (source, destination, distance))
    conn.commit()
    conn.close()
    
def get_distances():
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM distances")
        rows = cursor.fetchall()
        conn.close()

        print(f"Rows fetched: {rows}")

        return [
            {
                "id": row["id"],
                "source_address": row["source_address"],
                "destination_address": row["destination_address"],
                "distance": row["distance"]
            }
            for row in rows
        ]
    except Exception as e:
        print(f"Error: {e}")
        return {"detail": str(e)}

