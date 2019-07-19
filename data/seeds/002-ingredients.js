exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "milk" },
        { ingredient_name: "flour" },
        { ingredient_name: "eggs" },
        { ingredient_name: "butter" },
        { ingredient_name: "salt" },
        { ingredient_name: "sugar" },
        { ingredient_name: "watermelon" },
        { ingredient_name: "feta" },
        { ingredient_name: "mint" },
        { ingredient_name: "soda water" },
        { ingredient_name: "lemon juice" }
      ]);
    });
};
