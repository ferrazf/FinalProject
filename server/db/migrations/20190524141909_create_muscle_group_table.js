exports.up = function(knex, Promise) {
  return knex.schema.createTable("muscle_group", function(table) {
    table
      .increments("id")
      .unsigned()
      .index();
    table.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("muscle_group");
};
