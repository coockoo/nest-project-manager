psql -U $POSTGRES_USER -d $POSTGRES_DB  <<-EOSQL
	alter database $POSTGRES_DB owner to $POSTGRES_USER;
	create user $POSTGRES_APP_USER with password '$POSTGRES_APP_PASSWORD';

	\\connect $POSTGRES_DB

	grant connect on database $POSTGRES_DB to $POSTGRES_APP_USER;
	alter default privileges in schema public grant select, insert, update, delete on tables to $POSTGRES_APP_USER;
	alter default privileges in schema public grant all on sequences to $POSTGRES_APP_USER;

EOSQL

cd /docker-entrypoint-initdb.d/

# apply migrations (this should be done better in production.
# but we are not in production right now
psql -U $POSTGRES_USER -d $POSTGRES_DB -f ./migrations/01_create-table-users.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB -f ./migrations/02_create-table-projects.sql
