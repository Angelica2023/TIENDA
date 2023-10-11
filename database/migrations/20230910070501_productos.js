
exports.up = function(knex) {
  return knex.schema.createTable('productos', (table)=>{
table.increments('id');
table.string('nombre').notNullable().unique();
table.string('descripcion');
table.string('categoria');
table.integer('cantidad').notNullable();
table.decimal('precio',5,2);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('productos')
};
