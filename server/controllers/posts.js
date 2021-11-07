const express = require("express")
const model = require("../models/posts")

const app = express.Router()

app
    .get("/", (req, res, next) => { //comes up with any path
        res.send(model.GetAll())
    })
    .get("/:search", (req, res, next) => {//activated with a call to search?
        console.log(req.headers)
        res.send(model.Search(req.query.q))
    })
    .get("/:id", (req, res, next) => {
        res.send(model.Get(req.params.id))
    })
    .post("/", (req, res, next) => {
        const newPost = model.Add(req.body)
        res.status(201).send(newPost)
    })

module.exports = app