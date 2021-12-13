const express = require("express");
const router = express.Router();

let reviews = [{title: "Lion King", body: "A movie about a lion cub."},
               {title: "Cat in the hat", body: "A movie about a cat in a hat."}]

router.get("/", (req, res) => {
    res.render("index.ejs", {reviews})
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    if (reviews[id]) {
        try {
            res.render("index_single.ejs", {reviews: reviews[id]})
        } catch {
            res.json(id)    
        }
    } else {
        res.redirect("/")
    }
        
});

router.post("/post", (req, res) => {
    title = req.body.reviewTitle
    body = req.body.reviewBody
    if (title && body){
        reviews.push({title:title, body:body})
    }
    
    res.redirect("/")
});

module.exports = router;