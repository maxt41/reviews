const express = require("express");
const router = express.Router();

let reviews = [{title: "Title example", body: "Body example"},
               {title: "Title example 2", body: "Body example 2"},
               {title: "", body: ""}]

router.get("/", (req, res) => {
    res.render("index.ejs", {reviews})
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    try {
        res.json(reviews[id].title)
    } catch {
        res.json(id)
    }
        
});

router.post("/post", (req, res) => {
    title = req.body.reviewTitle
    body = req.body.reviewBody
    reviews.push({title:title, body:body})
    
    res.redirect("/")
});

module.exports = router;