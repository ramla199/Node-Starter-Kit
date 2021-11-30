const express = require("express");
const app = express();


app.get("/chocolate", (req, res) => {
    let searchQuery = req.query.amount;
    res.send("Hello World! You searched for " + searchQuery);
    console.log(searchQuery);
    //  console.log(req);
})

app.get("/node", (req, res) => {
    res.send("me");
})

app.get("/codeyourfuture", (req, res) => {
    res.send("cyf");
})

app.get("/multiply", function (req, res) {
    let value1 = req.query.value1;
    let value2 = req.query.value2;
    res.send(`This should return value of ${value1 * value2}`);
});

app.listen(3000, () => {
    console.log("hu");
})

