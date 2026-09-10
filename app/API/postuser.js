const express = require("express");
const app = express();

 app.use(express.json());

 const user = [

{
  id:1,
  name:"bhanu"
},
{
  id:2,
  name:"ajay"
},
{
  id:3,
  name:"harsh"
},
{
  id:4,
  name:"rahul"
}
];

app.post("/users", (req, res) =>{
  const data = req.body;
  
  const newUser = {
    id: 5,
    name:data.name
};
  user.push(newUser);

  res.status(201).json(newUser);
});

app.get("/users", (req, res) =>{
res.json(user);
});

app.listen(3000, ()=>{
  console.log("server running on port 3000");
});