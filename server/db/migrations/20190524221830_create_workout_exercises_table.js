//Create 'workout_exercises' table
exports.up = function(knex, Promise) {
  return knex.schema.createTable("workout_exercises", function(table) {
    table
      .increments("id")
      .unsigned()
      .notNullable()
      .index();
    table
      .integer("exercise_id")
      .unsigned()
      .notNullable()
      .index();
    table
      .integer("muscle_group_id")
      .unsigned()
      .notNullable()
      .index();
    table.integer("sets");
    table.integer("reps");
    table.integer("rest");
    table.foreign("exercise_id").references("exercises.id");
    table.foreign("muscle_group_id").references("muscle_groups.id");
  });
};

//Drop 'workout_exercises' table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workout_exercises");
};
