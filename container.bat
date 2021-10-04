@echo off

CALL :run

if %1 == "--frontend-logs" echo "docker logs -f frontend-crud"
if %1 == "--backend-logs" echo "docker logs -f backend-crud"
if %1 == "--migration" goto :migration

:migration
echo "docker exec -it backend-crud yarn typeorm migration:generate -n Deployment"
echo "docker exec -it backend-crud yarn typeorm migration:run"

:run
echo "docker-compose -f docker-compose.yml up -d"

EXIT /B 0