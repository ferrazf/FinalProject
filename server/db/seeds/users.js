exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ name: 'Alice Bobbington', email: 'alice.bobbington@alice.com'}),
        knex('users').insert({ name: 'Bob Charles', email: 'bob.charles@charles.com'}),
        knex('users').insert({ name: 'Mary McMaster', email: 'marymcm@mary.net' }),
        knex('users').insert({ name: 'Charlie Smith', email: 'charlie.smith@smith.com' }),
        knex('users').insert({ name: 'Alex Simpson', email: 'alex.simpson@alex.com' })
      ]);
    });
};
