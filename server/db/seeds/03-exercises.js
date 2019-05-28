exports.seed = function(knex, Promise) {
  return knex("exercises")
    .del()
    .then(function() {
      return Promise.all([
        knex("exercises").insert({
          id: 1,
          name: "Barbell Bench Press",
          muscle_group_id: 6,
          descr: "Main Muscle Worked: Chest."
        }),
        knex("exercises").insert({
          id: 2,
          name: "Reverse Grip Triceps Pushdown",
          muscle_group_id: 15,
          descr: "Main Muscle Worked: Triceps."
        }),
        knex("exercises").insert({
          id: 3,
          name: "Smith Machine Calf Raise",
          muscle_group_id: 5,
          descr: "Main Muscle Worked: Calves."
        }),
        knex("exercises").insert({
          id: 4,
          name: "Standing Cable Lift",
          muscle_group_id: 1,
          descr: "Main Muscle Worked: Abdominals."
        }),
        knex("exercises").insert({
          id: 5,
          name: "Push Press",
          muscle_group_id: 13,
          descr: "Main Muscle Worked: Shoulders."
        }),
        knex("exercises").insert({
          id: 6,
          name: "Barbell Bench Press more",
          muscle_group_id: 6,
          descr: "Main Muscle Worked: Chest."
        }),
      ]);
    });
};
