# Run with poetry

cd backend
poetry shell
poetry install
poetry run uvicorn main:app --reload


# Run with Docker
make build 
make run
make logs (to see application logs)
make stop (stop container)
