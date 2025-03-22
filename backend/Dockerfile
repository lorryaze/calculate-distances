FROM python:3.11.4-slim-bullseye AS prod

RUN pip install poetry==1.8.2

WORKDIR /app

ENV PYTHONPATH=/app

COPY pyproject.toml poetry.lock* ./
RUN poetry install --no-root --no-dev

COPY . .

RUN mkdir -p /app/backend && chmod 777 /app/backend

CMD ["poetry", "run", "uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
