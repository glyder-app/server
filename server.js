const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    var max_long = req.query.maxlong
    var min_long = req.query.minlong
    var max_lat = req.query.maxlat
    var min_lat = req.query.minlat
    // just sending default image for now
    //res.sendFile(__dirname + "/test_images/fire1_trans.png")
    res.send("This would be an image")
})

// PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on Port ${port}...`))