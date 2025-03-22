IMAGE_NAME = backend-app
PORT = 8000
CONTAINER_NAME = backend-container
DB_VOLUME = backend-db-volume 

create-volume:
	docker volume create $(DB_VOLUME)

build:
	docker build -t $(IMAGE_NAME) .

#smart code
run:
	docker run -d --name $(CONTAINER_NAME) \
		-p $(PORT):8000 \
		-v $(shell pwd)/backend:/app/backend \
		$(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

logs:
	docker logs -f $(CONTAINER_NAME)

remove-volume:
	docker volume rm $(DB_VOLUME)

clean: stop remove-volume
