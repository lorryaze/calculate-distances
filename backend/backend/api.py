from fastapi import FastAPI, HTTPException
from .models import DistanceRequest
from .services import calculate_distance, get_distances
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
        allow_origins=[
        "https://calculate-distances-1.onrender.com",
        "http://localhost:3000",    # local development
        "http://127.0.0.1:3000",    
        "http://0.0.0.0:3000",      # Docker default IP
        "http://frontend-1:3000"      # Service name on Docker
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/distances")
async def create_distance(request: DistanceRequest):
    try:
        distance = await calculate_distance(request.source, request.destination)  
        return {"distance_km": distance}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/distances")
def get_all_distances():
    return get_distances()


    
