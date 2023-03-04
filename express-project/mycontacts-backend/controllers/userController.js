const asyncHandler = require("express-async-handler")
//@description Register a user
//route POST api/users/register
//@access public
const registerUser = asyncHandler(async (req, res)=>{
    res.json({message : "Register the user"});
  });

  //@description Login a user
//route POST api/users/login
//@access public
const loginUser = asyncHandler(async (req, res)=>{
    res.json({message : "login user"});
  });

  //@description current user
//route GET api/users/current
//@access public
const currentUser = asyncHandler(async (req, res)=>{
    res.json({message : "current user information"});
  });


  module.exports= {registerUser,loginUser,currentUser}