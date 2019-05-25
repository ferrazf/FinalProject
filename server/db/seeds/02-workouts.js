exports.seed = function (knex, Promise) {
    return knex('workouts').del()
        .then(function () {
            return Promise.all([
                knex('workouts').insert({ user_id: 1 }),
                knex('workouts').insert({ user_id: 2 }),
                knex('workouts').insert({ user_id: 3 }),
                knex('workouts').insert({ user_id: 4 }),
                knex('workouts').insert({ user_id: 5 })
            ]);
        });
};
