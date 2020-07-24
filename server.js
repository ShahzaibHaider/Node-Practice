const express = require("express");
const app = express();

require("./database/database_connection");

const body_parser = require("body-parser");
app.use(body_parser.json());

const router= require("./routes/user_routes");
app.use("/user",router.routes);

app.listen(1000, ()=>{
    console.log("Server Running")
});