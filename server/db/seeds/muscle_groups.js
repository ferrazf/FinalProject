exports.seed = function (knex, Promise) {
    return knex('muscle_groups').del()
        .then(function () {
            return Promise.all([
                knex('muscle_groups').insert({ name: 'Abdominals' }),
                knex('muscle_groups').insert({ name: 'Abductors' }),
                knex('muscle_groups').insert({ name: 'Adductors' }),
                knex('muscle_groups').insert({ name: 'Biceps' }),
                knex('muscle_groups').insert({ name: 'Calves' }),
                knex('muscle_groups').insert({ name: 'Chest' }),
                knex('muscle_groups').insert({ name: 'Forearms' }),
                knex('muscle_groups').insert({ name: 'Glutes' }),
                knex('muscle_groups').insert({ name: 'Hamstrings' }),
                knex('muscle_groups').insert({ name: 'Middle Back' }),
                knex('muscle_groups').insert({ name: 'Neck' }),
                knex('muscle_groups').insert({ name: 'Quadriceps' }),
                knex('muscle_groups').insert({ name: 'Shoulders' }),
                knex('muscle_groups').insert({ name: 'Traps' }),
                knex('muscle_groups').insert({ name: 'Triceps' })
            ]);
        });
};