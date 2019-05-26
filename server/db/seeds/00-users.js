exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return Promise.all([
        knex("users").insert({
          id: 1,
          name: "Alice Bobbington",
          email: "alice.bobbington@alice.com"
        }),
        knex("users").insert({
          id: 2,
          name: "Bob Charles",
          email: "bob.charles@charles.com"
        }),
        knex("users").insert({
          id: 3,
          name: "Mary McMaster",
          email: "marymcm@mary.net"
        }),
        knex("users").insert({
          id: 4,
          name: "Charlie Smith",
          email: "charlie.smith@smith.com"
        }),
        knex("users").insert({
          id: 5,
          name: "Alex Simpson",
          email: "alex.simpson@alex.com"
        })
      ]);
    });
};
