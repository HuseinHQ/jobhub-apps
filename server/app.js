require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
const mainRoutes = require("./routes/");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", mainRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`App listens to port ${PORT}`));
