exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl => {
    tbl.increments();
    tbl
      .string("recipe_name")
      .notNullable()
      .unique();
  })
  .createTable("ingredients", tbl=> {
      tbl.increments()
      tbl.string("ingredient_name", 128).notNullable().unique()
  })
  .createTable("quantity", tbl => {
    tbl.increments();
    tbl.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes").onDelete("RESTRICT").onUpdate("CASCADE");
    tbl.integer("ingredient_id").unsigned().notNullable().references("id").inTable("ingredients").onDelete("RESTRICT").onUpdate("CASCADE")
    tbl.float("quantity").notNullable();
    tbl.string("unit");
  })
  .createTable("instructions", tbl => {
      tbl.increments();
      tbl.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes").onDelete("RESTRICT").onUpdate("CASCADE");
      tbl.integer("step_number");
      tbl.string("direction")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instructions")
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
