docker build --no-cache -f SQL\Dockerfile.PostgreSql -t euye12-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t euye12-java/app ../../..
