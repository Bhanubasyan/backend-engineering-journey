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

app.patch("/users/:id", (req, res)=>{

const id = Number(req.params.id);
const newName = req.body.name;

const foundUser = user.find((u) => u.id === id);

if(!foundUser){
  return res.status(404).json({
message: " User not found"
  });
}

foundUser.name = newName;
res.json(foundUser);

app.get("/users", (req, res) =>{
res.json(user);
});


});

app.listen(3000 , ()=>{
  console.log("server iss running on prot 3000");
});