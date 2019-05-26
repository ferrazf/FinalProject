exports.seed = function(knex, Promise) {
  return knex("muscle_groups")
    .del()
    .then(function() {
      return Promise.all([
        knex("muscle_groups").insert({ id: 1, name: "Abdominals" }),
        knex("muscle_groups").insert({ id: 2, name: "Abductors" }),
        knex("muscle_groups").insert({ id: 3, name: "Adductors" }),
        knex("muscle_groups").insert({ id: 4, name: "Biceps" }),
        knex("muscle_groups").insert({ id: 5, name: "Calves" }),
        knex("muscle_groups").insert({ id: 6, name: "Chest" }),
        knex("muscle_groups").insert({ id: 7, name: "Forearms" }),
        knex("muscle_groups").insert({ id: 8, name: "Glutes" }),
        knex("muscle_groups").insert({ id: 9, name: "Hamstrings" }),
        knex("muscle_groups").insert({ id: 10, name: "Middle Back" }),
        knex("muscle_groups").insert({ id: 11, name: "Neck" }),
        knex("muscle_groups").insert({ id: 12, name: "Quadriceps" }),
        knex("muscle_groups").insert({ id: 13, name: "Shoulders" }),
        knex("muscle_groups").insert({ id: 14, name: "Traps" }),
        knex("muscle_groups").insert({ id: 15, name: "Triceps" })
      ]);
    });
};
