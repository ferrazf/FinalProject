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
          rest: 1
        }),
        knex("workout_exercises").insert({
          workout_id: 1,
          exercise_id: 2,
          sets: 3,
          reps: 15,
          rest: 1
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 3,
          sets: 3,
          reps: 15,
          rest: 2
        }),
        knex("workout_exercises").insert({
          workout_id: 2,
          exercise_id: 4,
          sets: 5,
          reps: 8,
          rest: 2
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 3,
          sets: 3,
          reps: 12,
          rest: 2
        }),
        knex("workout_exercises").insert({
          workout_id: 3,
          exercise_id: 5,
          sets: 3,
          reps: 12,
          rest: 3
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 1,
          sets: 4,
          reps: 10,
          rest: 1
        }),
        knex("workout_exercises").insert({
          workout_id: 4,
          exercise_id: 4,
          sets: 3,
          reps: 8,
          rest: 3
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 5,
          sets: 5,
          reps: 15,
          rest: 2
        }),
        knex("workout_exercises").insert({
          workout_id: 5,
          exercise_id: 1,
          sets: 3,
          reps: 12,
          rest: 3
        })
      ]);
    });
};
