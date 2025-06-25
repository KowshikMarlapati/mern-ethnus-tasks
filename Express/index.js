const express = require("express");
const app = express();
const PORT = 4000;

const students = [
  { id: 1, name: "Alice", age: 22, course: "MCA" },
  { id: 2, name: "Bob", age: 21, course: "MBA" },
  { id: 3, name: "Ravi", age: 20, course: "B.Tech" },
  { id: 4, name: "Sonal", age: 23, course: "MBA" },
  { id: 5, name: "Karan", age: 21, course: "B.Sc" },
  { id: 6, name: "Priya", age: 24, course: "M.Tech" },
  { id: 7, name: "Ankit", age: 22, course: "B.Com" },
  { id: 8, name: "Neha", age: 20, course: "BBA" },
  { id: 9, name: "Vikram", age: 23, course: "MCA" },
  { id: 10, name: "Divya", age: 21, course: "BCA" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
