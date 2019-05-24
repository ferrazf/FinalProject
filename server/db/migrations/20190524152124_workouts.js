exports.up = function(knex, Promise) {
  return knex.schema.createTable("workouts", function(table) {
    table
      .increments("id")
      .unsigned()
      .notNullable()
      .index();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .index();
    table
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
    table
      .date("last_updated")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.foreign("user_id").references("users.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workouts");
};
