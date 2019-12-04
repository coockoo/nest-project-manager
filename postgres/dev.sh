DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Database name is completely random. Why not this one

docker rm -f comcard-test-postgres

docker run \
  --name comcard-test-postgres \
  --rm \
  --publish 5432:5432 \
  --volume $DIR/initdb.d:/docker-entrypoint-initdb.d \
  --env POSTGRES_USER=root \
  --env POSTGRES_PASSWORD=root \
  --env POSTGRES_APP_USER=app \
  --env POSTGRES_APP_PASSWORD=app \
  --env POSTGRES_DB=wes_anderson \
  postgres:11.4-alpine \
  -c "log_statement=all"
