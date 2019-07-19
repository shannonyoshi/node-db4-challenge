const express = require("express")

const Recipes = require("./recipes-model")

const router = express.Router();

router.get("/", async (req, res)=> {
    try{
        const recipes = await Recipes.getRecipes();
        res.json(recipes)
    } catch(err) {
        res.status(500).json({message: err})
    }
})

router.get("/:id", async(req, res)=> {
    try{
        const recipe = await Recipes.getRecipe(req.params.id)
        res.json(recipe)
    } catch(err) {
        console.log(err)
        res.status(500).jsonp({message: "Error"})
    }
})

router.get("/:id/ingredients",async (req, res)=> {
    try{
        const ingredients = await Recipes.getShoppingList(req.params.id);
        res.json(ingredients)
    } catch(err) {
        console.log(err)
        res.status(500).json({message:"Error"})
    }
})

router.get("/:id/instructions", async (req, res)=> {
    try{
        const instructions = await Recipes.getInstructions(req.params.id)
        res.json(instructions)
    } catch{
        console.log(err)
        res.status(500).json({message:"Error"})
    }
})

module.exports = router;