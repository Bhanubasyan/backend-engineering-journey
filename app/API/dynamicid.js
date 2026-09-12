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
  if(!data.name) {
    return res.status(400).json({ 
      message:"User name is required"
    });
  }

  const maxId = Math.max(...user.map(u =>u.id));
  const newId = user.length +1;
  const newUser = {
    id: newId,
    name:data.name
};
  
  user.push(newUser);
  
  res.status(201).json(newUser);
});

// thi return all users 
app.get("/users", (req, res) =>{
res.json(user);
});

// this return only quried user 
app.get("/users? ")

app.listen(3000, ()=>{
  console.log("server running on port 3000");
});