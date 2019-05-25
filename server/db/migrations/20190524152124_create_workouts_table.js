//Create 'workouts' table
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
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable()
    table.foreign("user_id").references("users.id");
  });
};

//Drop 'workouts' table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workouts");
};
