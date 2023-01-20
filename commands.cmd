

@REM run pending migrations
npx dotenv sequelize-cli db:migrate

@REM run pending migrations
npx dotenv sequelize-cli db:migrate:undo

@REM run pending seeds
npx dotenv sequelize-cli db:seed:all


@REM create a new migration file
npx sequelize-cli migration:generate --name add-age-to-cats

@REM create a new migration file
npx sequelize-cli migration:generate --name add-unique-constraint-to-color-names

@REM create a new migration file
npx sequelize-cli migration:generate --name add-unique-constraint-to-color-names

@REM create a new migration file
npx sequelize-cli migration:generate --name rename-games-numPlayers-and-remove-estPlayTime