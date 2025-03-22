from pydantic import BaseModel

class DistanceRequest(BaseModel):
    source: str
    destination: str

class Distance:
    def __init__(self, source_address, destination_address, distance):
        self.source_address = source_address
        self.destination_address = destination_address
        self.distance = distance