//Create 'exercises' table
exports.up = function(knex, Promise) {
  return knex.schema.createTable("exercises", function(table) {
    table
      .increments("id")
      .unsigned()
      .notNullable()
      .index();
    table
      .unsigned("muscle_group_id")
      .notNullable()
      .index();
    table.string("name");
    table.string("descr");
    table.foreign("muscle_group_id").references("muscle_groups.id");
  });
};

//Drop 'exercises' table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("exercises");
};