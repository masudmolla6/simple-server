const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const data = require("./data/data.json");


app.get("/", (req, res) => {
    res.send("Hello From Simple Server");
})

app.get("/data", (req, res) => {
    res.send(data);
})

app.listen(port, () =>{
    console.log("server is runing from port", port);
})
