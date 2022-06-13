up:
	docker compose up -d --build
	# docker compose up -d
	notify-send --category=im.received "api started!"

down:
	docker compose down

restart: clear down up ps logs-api

logs-%:
	docker compose logs $* -f

clear:
	clear

ps:
	docker compose ps

##
# apply-minikube:
#     eval $(minikube docker-env)
#
# undo-minikube:
#     eval $(minikube docker-env)
##
