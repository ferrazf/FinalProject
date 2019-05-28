exports.seed = function(knex, Promise) {
  return knex("workout_exercises")
    .del()
    .then(function() {
      return Promise.all([
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 1,
          sets: 3,
          reps: 12,
          rest: 1,
          weight: 150
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 6,
          sets: 3,
          reps: 9,
          rest: 2,
          weight: 150
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 2,
          sets: 3,
          reps: 15,
          rest: 2,
          weight: 90
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 3,
          sets: 3,
          reps: 12,
          rest: 2,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 4,
          sets: 3,
          reps: 12,
          rest: 2,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 2,
          sets: 3,
          reps: 14,
          rest: 1,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 3,
          sets: 3,
          reps: 12,
          rest: 2,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 5,
          sets: 3,
          reps: 15,
          rest: 2,
          weight: 160
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 1,
          sets: 6,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 4,
          sets: 6,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 1,
          sets: 5,
          reps: 15,
          rest: 2,
          weight: 75
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 5,
          sets: 5,
          reps: 15,
          rest: 2,
          weight: 75
        })
      ]);
    });
};
