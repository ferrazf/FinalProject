//Add 'weight' column
exports.up = function(knex, Promise) {
  return knex.schema.table("workout_exercises", function(table) {
    table
      .integer("weight")
      .notNullable()
      .defaultTo(0);
  });
};

//Drop 'weight' column
exports.down = function(knex, Promise) {
  return knex.schema.table("workout_exercises", function(table) {
    table.dropColumn("weight");
  });
};
