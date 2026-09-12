const express = require("express");
const app = express();
app.use(express.json());

let users =[
   { id: 1, name: "Bhanu" },
    { id: 2, name: "Ajay" },
    { id: 3, name: "Rahul" }
];

// create user
app.post("/users", (req, res)=>{

  let length = users.length;

  const userName = req.body.name;

 const newUser ={
  id: length+1,
  name:userName
 };

  users.push(newUser);

  res.status(200).json(newUser);

});



// read user
app.get("/users", (req, res)=>{
  res.json(users);
});

//update user /patch
app.patch("/users/:id", (req, res)=>{

  const id = Number(req.params.id);
  const newName = req.body.name;

  let findUser = users.find((u) => u.id === id);

  if (!findUser) {
  return res.status(404).json({
    message: "user not found"
  });
}

  findUser.name = newName;
  res.json(newName);

  
});


//delete user
app.delete("/users/:id", (req, res)=>{
  
  const id = Number(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.json({
    messaage:" user delete sucessfully"
  });

});



app.listen(3000, ()=>{
 console.log("server is running on port 3000");
});