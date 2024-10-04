const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./Models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(""); ///Enter you Connecting String

app.post('/login', (request, response) =>{
    const {email, password} = request.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
            response.json("Success")
            } else {
            response.json("Password is Incorrect")
            }
        } else {
            response.json("No Record Found!")
        }
    })
})

app.post('', (request, response) => {  ///Enter your Link
    EmployeeModel.create(request.body)
    .then(employees => response.json(employees))
    .catch(err => response.json(err))
})

app.listen(3001, () => {
    console.log("server is running");
})
