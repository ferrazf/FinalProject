exports.seed = function (knex, Promise) {
    return knex('exercises').del()
        .then(function () {
            return Promise.all([
                knex('exercises').insert({ name: 'Barbell Bench Press', muscle_group_id: 6, descr: 'Main Muscle Worked: Chest.' }),
                knex('exercises').insert({ name: 'Reverse Grip Triceps Pushdown', muscle_group_id: 15, descr: 'Main Muscle Worked: Triceps.' }),
                knex('exercises').insert({ name: 'Smith Machine Calf Raise', muscle_group_id: 5, descr: 'Main Muscle Worked: Calves.' }),
                knex('exercises').insert({ name: 'Standing Cable Lift', muscle_group_id: 1, descr: 'Main Muscle Worked: Abdominals.' }),
                knex('exercises').insert({ name: 'Push Press', muscle_group_id: 13, descr: 'Main Muscle Worked: Shoulders.' })
            ]);
        });
};
