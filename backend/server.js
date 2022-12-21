const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// Enable middleware -- body parse
// allows body data to be pased to the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openAIRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
