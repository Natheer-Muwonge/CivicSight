from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class Report(BaseModel):
    location: str
    category: str
    description: str
    name: str
    email: str
    image: Optional[str] = None

@app.post("/api/report")
async def create_report(report: Report):
    print("Received report:")
    print(f"  Location: {report.location}")
    print(f"  Category: {report.category}")
    print(f"  Description: {report.description}")
    print(f"  Name: {report.name}")
    print(f"  Email: {report.email}")
    print(f"  Image provided: {'Yes' if report.image else 'No'}")
    return {"message": "Report received successfully"} 