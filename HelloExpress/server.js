const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const PORT= 8000;
// These will always be at the top to initialize the server
//---------------------------------------------
//This is the middleware that allows us to access the data from the client side
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//---------------------------------------------

class User {
  constructor( id, first_name, last_name, phonenumber, email, pw){
  this.id= faker.datatype.number();
  this.first_name= faker.name.firstName();
  this.last_name= faker.name.lastName();
  this.phonenumber= faker.phone.phoneNumber()
  this.email=faker.internet.email();
  this.pw= faker.internet.password();
  }
  

}
let allusers= []

class Company {
  constructor(cid, name, address){
  this.cid= faker.datatype.number();
  this.name= faker.company.companyName()
  this.address= `${faker.address.streetName()}, ${faker.address.cityName()}, ${faker.address.state()}, ${faker.address.zipCode()}, ${faker.address.country()}`
  }
}
let allcos=[];

// app.get("/api", (req, res)=>{
//   res.send("Hello")
//   res.json({status: 'ok'})
// })

// req is short for request
// // res is short for response
app.get("/api/users/new", (req, res) => {
  const u = new User();
  allusers.push(u)
  // console.log(req.body)
  // allusers.push(req.body)
  
  res.json({
    username: `${u.first_name} ${u.last_name}`,
    email: `${u.email}`,
    phone_number: `${u.phonenumber}`,
    ID : `${u.id}`
  })
});

app.get("/api/company/new", (req, res) => {
  const c = new Company();
  allcos.push(c)
  // console.log(req.body)
  // allusers.push(req.body)
  
  res.json({
    Name: `${c.name}`,
    address: `${c.address}`,
    ID : `${c.cid}`
  })
});

app.get("/api/user/company", (req, res) => {
  const c = new Company();
  const u= new User();
  allcos.push(c)
  allusers.push(u)
  // console.log(req.body)
  // allusers.push(req.body)
  
  res.json([{
    Company: " ",
    Name: `${c.name}`,
    address: `${c.address}`,
    ID : `${c.cid}`
  },
  
  {
     User: " ",
    username: `${u.first_name} ${u.last_name}`,
    email: `${u.email}`,
    phone_number: `${u.phonenumber}`,
    ID : `${u.id}`
  }]
  )
  
});


//---------------------------------------------
const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
//app.listen should always be at the bottom of the code
//app.listen(PORT, () => console.log(`Server started on port ${PORT} and is listening for requests)) is another way of writing it 
