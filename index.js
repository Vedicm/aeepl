const express = require("express");
const app = express();
const cors = require("cors");
const port = 7777;
const connect = require("./connection.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const plantsRouter = require("./routes/plants.js");
const projectsRouter = require("./routes/projects.js");
const serviceRouter = require("./routes/service.js");
const frontRouter = require("./routes/front.js");

connect();

app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", frontRouter);
app.use("/plants", plantsRouter);
app.use("/project", projectsRouter);
app.use("/service", serviceRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


console.log("Which has been code for the development and it will redirect code apart of the develop")