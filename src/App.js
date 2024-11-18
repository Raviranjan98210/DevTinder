const express = require("express");

const app = express();
app.use("/name", (req, res) => res.send("Hello this is Ravi"));

app.listen(3000, () => console.log("Server is running successfully on the port 3000"));

