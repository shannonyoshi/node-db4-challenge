exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("quantity")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quantity").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 2, unit: "cups" },
        { recipe_id: 1, ingredient_id: 2, quantity: 2, unit: "cups" },
        { recipe_id: 1, ingredient_id: 3, quantity: 6, unit: "whole" },
        { recipe_id: 1, ingredient_id: 4, quantity: 0.5, unit: "cup" },
        { recipe_id: 1, ingredient_id: 5, quantity: 1, unit: "teaspoon" },
        { recipe_id: 1, ingredient_id: 6, quantity: 1, unit: "tablespoon" },
        { recipe_id: 1, ingredient_id: 1, quantity: 2, unit: "cups" },
        { recipe_id: 2, ingredient_id: 7, quantity: 0.5, unit: "whole" },
        { recipe_id: 2, ingredient_id: 8, quantity: 6, unit: "ounces" },
        { recipe_id: 2, ingredient_id: 9, quantity: 1, unit: "bunch" },
        { recipe_id: 3, ingredient_id: 6, quantity: 3, unit: "teaspoons" },
        { recipe_id: 3, ingredient_id: 10, quantity: 1, unit: "cup" },
        { recipe_id: 3, ingredient_id: 11, quantity: 2, unit: "teaspoons" }
      ]);
    });
};
