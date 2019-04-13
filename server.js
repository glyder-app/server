const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    var max_long = req.query.maxlong
    var min_long = req.query.minlong
    var max_lat = req.query.maxlat
    var min_lat = req.query.minlat
    // just sending default image for now
    res.sendFile(__dirname + "/test_images/fire1_trans.png")
})

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port ${port}...`))