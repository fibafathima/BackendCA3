const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())
const PORT =9091

app.post("/signup",async(req,res)=>{
   const {username,email,password,dateofBirth} = req.body
   const User = {username,email,password,dateofBirth}

   if (!username || username.trim() === '') {
    return res.status(400).json({ error: 'Username cannot be empty' });
  }


  if (!email || email.trim()==='' ) {
    return res.status(400).json({ error: 'email cannot be empty' });
  }

  // Password validation
  if (!password || password.length < 8 || password.length > 16 ) {
    return res.status(400).json({ error: 'Password length should be greater than 8 or less than or equal to 16' });
  }

  return res.status(200).json({ message: 'SignUp successfull' });
});


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `)

})