//Create 'workout_muscle_groups' table
exports.up = function(knex, Promise) {
  return knex.schema.createTable("workout_muscle_groups", function(table) {
    table
      .increments("workout_id")
      .unsigned()
      .notNullable()
      .index();
    table
      .increments("muscle_group_id")
      .unsigned()
      .notNullable()
      .index();
    table.foreign("workout_id").references("workouts.id");
    table.foreign("muscle_group_id").references("muscle_groups.id");
  });
};


//Drop 'workout_muscle_groups' table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workout_muscle_groups");
};
