const express = require("express");

const app = express();

app.get("/",(req, res) =>{
  res.send("hello backend");
});

/* about response route */
app.get("/about", (req, res)=>{

  res.send("this is bhanu about page ");
});


/* get users route*/
const user = [
  {
    id:1,
    name:"Bhanu"
  },
  {
    id:2,
    name:"Ajay"
  },
  {
    id:3,
    name:"Rahul"
  }
];
 

app.get("/users", (req, res) =>{
res.json(user);
});

// get id route 
app.get("/users/:id", (req, res)=>{
  const id = Number(req.params.id);

  const foundUser = user.find((u)=>u.id === id);

  if(!foundUser){
    return res.status(404).json({
      message: "User not found"
    });
  }
  res.json(foundUser);

});
app.listen(3000, ()=>{
  console.log("server running on port 3000");
})