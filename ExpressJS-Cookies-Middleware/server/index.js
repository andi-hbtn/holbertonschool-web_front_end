const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get('/api/set-cookie', (req, res) => {
    res.cookie('key', "I am the cookie", { maxAge: 10000 })
    res.send({ message: "hello" });
});

app.get('/api/get-cookie', (req, res) => {
    console.log(`cookie is: ${req.headers.cookie}`);
    res.send({ message: req.headers.cookie });
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});





// res.cookie('key', "value", {
//     maxAge: 10000,
//     httpOnly: true,
//     secure: true,
//     sameSite: 'strict'
// });