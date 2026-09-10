const express = require("express");
const app = express();
app.use(express.json());

let user = [

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

app.delete("/users/:id", (req, res)=>{

const id = Number(req.params.id);

user = user.filter((u) => u.id !== id);

res.json({
  message: "user delete successfully"
});



});

app.listen(3000 , ()=>{
  console.log("server iss running on prot 3000");
});