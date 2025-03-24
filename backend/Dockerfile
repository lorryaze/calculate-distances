FROM python:3.11.4-slim-bullseye

RUN pip install poetry==1.8.2

WORKDIR /app

ENV PYTHONPATH=/app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1


COPY pyproject.toml poetry.lock* ./
RUN poetry config virtualenvs.create false && \
    poetry install --no-dev
#RUN poetry install --no-root --no-dev

COPY . .

#Grant permissions 
RUN mkdir -p /app/backend && chmod 777 /app/backend

# Heorku ports
ENV PORT=8000
EXPOSE $PORT

CMD ["poetry", "run", "uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
