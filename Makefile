.PHONY: docker-build
docker-build:
	docker-compose build --no-cache --force-rm

.PHONY: init
init:
	@make docker-build
	@make up
	@make npm-install

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
	docker-compose ps

.PHONY: remove-volume
remove-volume:
	docker volume rm arsaga-hackathon-website_node_modules

.PHONY: npm-install
npm-install:
	docker-compose exec gatsby npm install

.PHONY: gatsby
gatsby:
	docker-compose exec gatsby bash

.PHONY: develop
develop:
	@make clean
	docker-compose exec gatsby npm run develop

.PHONY: start
start:
	@make clean
	docker-compose exec gatsby npm run develop

.PHONY: build
build:
	@make clean
	docker-compose exec gatsby npm run build

.PHONY: serve
serve:
	docker-compose exec gatsby npm run serve

.PHONY: clean
clean:
	docker-compose exec gatsby npm run clean

.PHONY: typecheck
typecheck:
	docker-compose exec gatsby npm run typecheck

.PHONY: lint-fix
lint-fix:
	docker-compose exec gatsby npm run lint-fix

.PHONY: open
open:
	devcontainer open