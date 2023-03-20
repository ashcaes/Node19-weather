const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const { call } = require("./utils/data");

const puplic = path.join(__dirname, "../puplic");

const viewsPath = path.join(__dirname, "./templates/views");

const partialPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");

app.set("views", viewsPath);

hbs.registerPartials(partialPath);

app.use(express.static(puplic));

app.get("", (req, res) =>
  res.render("index", {
    message: "hello my friends to the best visitor trip advisor website ",
  })
);

app.get("/about", (req, res) =>
  res.render("about", {
    message: "we re So happy that you want to know more about us",
  })
);

app.get("/ratings", (req, res) => {
  console.log(req.query.GameOfThrones);
  if (parseFloat(req.query.GameOfThrones) > 8.5) {
    return res.send({
      message: "you chosen the right show to watch",
    });
  }
  res.send({
    "The Dark Knight": 8.8,
    Interception: 7.9,
  });
});

app.get("/weather", async (req, res) => {
  res.render("weather");
   const dame = req.query.location
   if (dame) {
     const weatherData = await call(dame);
     res.send(weatherData?.data);
   } else {
     res.send({
       location: "Kyoto",
       weather: "its a nice cool day with faling leaves all over the streets",
     });
   }
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3070, () => console.log("server started lad"));
