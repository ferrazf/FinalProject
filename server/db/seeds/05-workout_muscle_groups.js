exports.seed = function(knex, Promise) {
  return knex("workout_muscle_groups")
    .del()
    .then(function() {
      return Promise.all([
        knex("workout_muscle_groups").insert({
          workout_id: 1,
          muscle_group_id: 3
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 1,
          muscle_group_id: 7
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 2,
          muscle_group_id: 1
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 2,
          muscle_group_id: 6
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 3,
          muscle_group_id: 5
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 3,
          muscle_group_id: 6
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 3,
          muscle_group_id: 7
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 4,
          muscle_group_id: 1
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 4,
          muscle_group_id: 3
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 5,
          muscle_group_id: 3
        }),
        knex("workout_muscle_groups").insert({
          workout_id: 5,
          muscle_group_id: 5
        })
      ]);
    });
};
