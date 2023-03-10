const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.webp",
  },
  {
    id: 2,
    name: "Raichu",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.webp",
  },
  {
    id: 3,
    name: "Charmander",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.webp",
  },
  {
    id: 4,
    name: "Squirtle",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.webp",
  },
];

app.use(express.static("build"));
// app.get("/", (req, res) => {
//   // react
// });

app.get("/api/pokemons", (req, res) => {
  console.log("GET /api/pokemons");
  res.send({ pokemons: pokemons });
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body;
  console.log("POST /api/pokemons", data);
  data.id = pokemons.length + 1;
  pokemons.push(data);
  res.redirect("/");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
