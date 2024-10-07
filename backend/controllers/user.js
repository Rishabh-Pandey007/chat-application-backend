import { compare } from "bcrypt";
import {User} from "../models/user.js";
import { sendToken } from "../utils/features.js";
//Create a new user and save it to the database and save in cookie
const newUser= async(req, res)=>{

    const {name, username, password, bio}= req.body;

     
    

    const avatar = {
        public_id:"sdfsd",
        url:"asdf",
    };

    // fetch if user already exists
    const userExist = await User.findOne({username});

    if(userExist)
    return res.status(400).json({error:"User already exists"});
    

    const user = await User.create(
        {
            name,
            bio, 
            username, 
            password,
            avatar,
        });
    
      
       sendToken(res, user, 201, "User created");
        
};
const login= async(req, res)=>{

    const {username, password}= req.body;
    const user = await User.findOne({username}).select("+password");

    const isMatch = await compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({error:"Invalid credentials"});
    }

    sendToken(res, user, 200, `Welcome ${user.name}`);

    console.log(username, password);
    res.send("Hello World");
};


export {login, newUser};