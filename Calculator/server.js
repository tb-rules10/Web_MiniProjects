const express = require("express");
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')))



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})