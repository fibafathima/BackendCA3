const express = require('express')
const port = 8080
const app = express()
app.use(express.json())
const UserModel = require('./user.model')

app.post('/send',async(req,res)=>{
    try {
        const {email,password} = req.body
        if (!email){
            return res.status(400).json({"Message":"Email cannot be empty"})
        }
        if (!password){
            return res.status(400).json({"Message":"Password cannot be empty"})
        }
        const newUser = new UserModel({email, password});
        const savedUser = await newUser.save()
        return res.status(201).json(savedUser)
        
    } catch (error) {
        return res.status(500).json(error)
        
    }
})

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});