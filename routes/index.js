const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const reviews = [
        {title: "Title example", body: "Body example"},
        {title: "Title example 2", body: "Body example 2"},
        {title: "", body: ""}
    ]
    res.render("index.ejs", {reviews})
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(id)
});

router.post("/post", (req, res) => {
    title = req.body.reviewTitle
    body = req.body.reviewBody
    console.log(title, body)
    
    res.redirect("/")
});

module.exports = router;