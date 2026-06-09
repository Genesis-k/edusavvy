from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your local frontend to talk to your local backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, change "*" to your explicit frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
def read_data():
    # This is the Python data you want to send to your frontend interface
    return {"message": "Hello from the Python backend engine!"}