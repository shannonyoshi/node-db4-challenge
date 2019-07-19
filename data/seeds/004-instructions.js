exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_number: 1,
          direction: "Heat butter until just melted, set aside to cool"
        },
        {
          recipe_id: 1,
          step_number: 2,
          direction: "In a medium bowl mix together milk and eggs, set aside"
        },
        {
          recipe_id: 1,
          step_number: 3,
          direction: "In a large bowl, sift flour, sugar and salt together"
        },
        {
          recipe_id: 1,
          step_number: 4,
          direction:
            "Whisk milk muxture in 3 additions, alternating with cooled, melted, butter, into flour mixture until smooth"
        },
        {
          recipe_id: 1,
          step_number: 5,
          direction:
            "Let rest minimum 30 minutes in the refrigerator before cooking"
        },
        {
          recipe_id: 2,
          step_number: 1,
          direction: "Chop watermelon into 1 inch pieces and add to large bowl"
        },
        {
          recipe_id: 2,
          step_number: 2,
          direction:
            "Roughly chop mint, and crumble feta into bowl with watermelon"
        },
        {
          recipe_id: 2,
          step_number: 3,
          direction: "Toss, salt to taste, and serve"
        },
        {
          recipe_id: 3,
          step_number: 1,
          direction: "Dissolve sugar into lemon juice by stirring in a glass"
        },
        {
          recipe_id: 3,
          step_number: 2,
          direction: "Add soda water to fill glass, enjoy"
        }
      ]);
    });
};
