//Create 'users' table
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table
      .increments("id")
      .unsigned()
      .notNullable()
      .index();
    table.string("name");
    table.string("email");
  });
};

//Drop 'users' table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
