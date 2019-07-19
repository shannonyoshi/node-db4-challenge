
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Crepes'},
        { recipe_name: 'Watermelon Salad'},
        { recipe_name: 'Lemonade'}
      ]);
    });
};
