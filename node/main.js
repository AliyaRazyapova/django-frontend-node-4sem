const express = require('express');

const app = express();

app.use(express.json()) // for parsing application/json

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({"status": "ok"});
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST);
console.log(`webserver started on ${PORT} port`);