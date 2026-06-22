const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://bhanubasyan_db_user:9ePtJNNZ8yZg2CPg@cluster0.zqtj1n1.mongodb.net/")
.then(() => console.log("Mongo DB Atlas connected "))
.catch(err => console.log(err));

const StudentSchema = new mongoose.Schema({
  name: String,
  age:Number
});

const Student = mongoose.model("Student", StudentSchema);

app.get("/add-student", async(req, res) =>{
  const student = new Student({
    name : "Bhanu",
    age:23
  });

  await student.save();

  res.send("Stident added ");
});

app.get("/students", async(req, res) =>{
  const students = await Student.find();

  res.json(students);
});



app.listen(3000, () =>{
  console.log("Server running on port 3000");
  console.log("http://localhost:3000");
});