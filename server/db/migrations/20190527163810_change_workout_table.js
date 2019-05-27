
exports.up = function(knex, Promise) {
  return knex.schema.table("workouts", function(table) {
    table
      .dropColumn("completed")
      .dropColumn("updated_at");
    table
      .timestamp('stated_at');
    table
      .timestamp('finished_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("workouts", function(table) {
    table
      .dropColumn("stated_at")
      .dropColumn("finished_at");
    table
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};
