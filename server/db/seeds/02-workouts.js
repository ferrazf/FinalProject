exports.seed = function(knex, Promise) {
  return knex("workouts")
    .del()
    .then(function() {
    return Promise.all([
      knex("workouts").insert({ id: 1, user_id: 1 }),
      knex("workouts").insert({ id: 2, user_id: 2 }),
      knex("workouts").insert({ id: 3, user_id: 3 }),
      knex("workouts").insert({ id: 4, user_id: 4 }),
      knex("workouts").insert({ id: 5, user_id: 5 })
    ]);
  });
};
