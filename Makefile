.PHONY: docker-build
docker-build:
	docker-compose build --no-cache --force-rm

.PHONY: up
up:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose stop

.PHONY: down
down:
	docker-compose down

.PHONY: restart
restart:
	@make down
	@make up

.PHONY: ps
ps:
	docker ps

.PHONY: npm-install
npm-install:
	docker-compose exec gatsby npm install

.PHONY: lint-fix
lint-fix:
	docker-compose exec gatsby npm run lint-fix

.PHONY: gatsby
gatsby:
	docker-compose exec gatsby bash

.PHONY: start
start:
	@make clean
	docker-compose exec gatsby gatsby develop --host 0.0.0.0

.PHONY: develop
develop:
	@make clean
	docker-compose exec gatsby gatsby develop --host 0.0.0.0

.PHONY: build
build:
	@make clean
	docker-compose exec gatsby gatsby build

.PHONY: serve
serve:
	docker-compose exec gatsby gatsby serve --host 0.0.0.0

.PHONY: clean
clean:
	docker-compose exec gatsby gatsby clean

.PHONY: typecheck
typecheck:
	docker-compose exec gatsby gatsby tsc --noEmit