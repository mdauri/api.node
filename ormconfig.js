console.log("process.env.NODE_ENV >> ", process.env.NODE_ENV );
console.log("process.env.DATABASE_URL >> ", process.env.DATABASE_URL);

console.log("process.env.NODE_ENV >> ", process.env.NODE_ENV);
console.log("process.env.TYPEORM_ENTITIES_FOLDER >> ", process.env.TYPEORM_ENTITIES_FOLDER);
console.log("process.env.TYPEORM_MIGRATIONS_FOLDER >> ", process.env.TYPEORM_MIGRATIONS_FOLDER);
if (process.env.NODE_ENV  === 'production')
  {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },    
    "entities": [process.env.TYPEORM_ENTITIES_FOLDER],
    "migrations": [process.env.TYPEORM_MIGRATIONS_FOLDER],
    "cli":{
      "migrationsDir": [process.env.TYPEORM_MIGRATIONS_FOLDER],
      "entitiesDir": [process.env.TYPEORM_ENTITIES_FOLDER]
    }
  }
} else {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.TYPEORM_ENTITIES_FOLDER],
    "migrations": [process.env.TYPEORM_MIGRATIONS_FOLDER],    
    "cli":{
      "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR
    }
  }
}
