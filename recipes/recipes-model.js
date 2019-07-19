const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getRecipe,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes")
}

function getRecipe(id) {
    return db("recipes")
    .innerJoin("quantity", "recipes.id", "quantity.recipe_id")
    .where({"recipes.id": id})
    .innerJoin("ingredients", "quantity.ingredient_id", "ingredients.id")
    .innerJoin("instructions","recipes.id", "instructions.recipe_id")
    .select(
        "recipes.recipe_name as recipe",
        "quantity.quantity",
        "quantity.unit",
        "ingredients.ingredient_name",
        "instructions.step_number as step",
        "instructions.direction"
    )
}

function getShoppingList(id) {
  return db("quantity")

    .innerJoin("ingredients", "quantity.ingredient_id", "ingredients.id")
    .where({ recipe_id: id })
    .select(
        "quantity.quantity", 
        "quantity.unit", 
        "ingredients.ingredient_name as ingredient")
    .then(ingredients => {
      if (ingredients) {
        return ingredients;
      } else {
        return null;
      }
    });
}

function getInstructions(id) {
  return db("instructions as I")
    .where({ recipe_id: id })
    .select("step_number as step", "direction")
    .then(instructions => {
      if (instructions) {
        return instructions;
      } else {
        return null;
      }
    });
}
