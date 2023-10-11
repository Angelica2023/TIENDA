// Actualizando con configuracion de settings 


export default {

  development: {
    client: 'pg',
    useNullAsDefault: true,

    connection: {
      database: 'TIENDA',
      user:     'postgres',
      password: 'NAAlper2021'
    },
    pool:{
      min:2,
      max:10,
    },
    migrations: {     
      tableName: 'knex_migrations',
    },
  },

};
