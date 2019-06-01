exports.seed = function(knex, Promise) {
  return knex("workout_exercises")
    .del()
    .then(function() {
      return Promise.all([
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 1,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 150
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 2,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 150
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 3,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 90
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 11,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 90
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 11,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 90
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 16,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 17,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 18,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 11,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 165
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 12,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 13,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 160
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 53,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 160
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 51,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 160
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 52,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 160
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 26,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 27,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 36,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 37,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 185
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 46,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 75
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 47,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 75
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 48,
          sets: 3,
          reps: 10,
          rest: 1,
          weight: 75
        })
      ]);
    });
};
