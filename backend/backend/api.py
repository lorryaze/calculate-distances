from fastapi import FastAPI, HTTPException
from .models import DistanceRequest
from .services import calculate_distance, get_distances
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
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


    
