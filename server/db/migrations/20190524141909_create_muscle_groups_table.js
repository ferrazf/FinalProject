//Create 'muscle_groups' table
exports.up = function(knex, Promise) {
  return knex.schema.createTable("muscle_groups", function(table) {
    table
      .increments("id")
      .unsigned()
      .notNullable()
      .index();
    table.string("name");
  });
};

//Drop 'muscle_groups' table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("muscle_groups");
};
