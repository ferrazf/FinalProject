exports.seed = function(knex, Promise) {
  return knex("muscle_groups")
    .del()
    .then(function() {
      return Promise.all([
        knex("muscle_groups").insert({ id: 1, name: "Abs" }),
        knex("muscle_groups").insert({ id: 2, name: "Biceps" }),
        knex("muscle_groups").insert({ id: 3, name: "Chest" }),
        knex("muscle_groups").insert({ id: 4, name: "Back" }),
        knex("muscle_groups").insert({ id: 5, name: "Shoulders" }),
        knex("muscle_groups").insert({ id: 6, name: "Legs" }),
        knex("muscle_groups").insert({ id: 7, name: "Triceps" })
      ]);
    });
};
