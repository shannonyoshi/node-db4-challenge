const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require("./recipes/RecipesRouter")

const server = express();
server.use(helmet())
server.use(express.json())
server.use("/recipes", RecipesRouter);

server.get("/",(req, res)=> {
    res.send(`<h3>Server Running</h3>`)
})

module.exports = server;