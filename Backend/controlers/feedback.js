const User = require("../Model/feedbackModel");

const getAllusers = async(req,res,next) => {

    let Users;

    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message:"User not found"});
    }

    //display all users
    return res.status(200).json({users});
};

//data Insert 
const addUsers =async(req,res,next) => {

    const {name,gmail,role,feedbackType,message,rating,createdAt} = req.body;
    
    let users;

    try{
        users = new User({name,gmail,role,feedbackType,message,rating,createdAt});
        await users.save();

    }catch(err){
        console.log(err);
    }
    
    //not insert users

    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }

    return res.status(200).json({users});

};
//Get by ID
const getById= async(req,res,next)=>{
    const id = req.params.id;

    let user;
    try{
        user=await User.findById(id);
    }catch(err){
        console.log(err);
    }

    
    //not available users

    if(!user){
        return res.status(404).json({message:"User not fount"});
    }

    return res.status(200).json({user});

};

//Update user Details
const UpdateUser =  async (req,res,next)=>{
    const id = req.params.id;
    const {name,gmail,role,feedbackType,message,rating,createdAt} = req.body;
    
    let users;

    try{
        users=await User.findByIdAndUpdate(id,
            {name:name,gmail:gmail,role:role,feedbackType:feedbackType,message:message,rating:rating,createdAt:createdAt});
            users = await users.save();
    }catch(err){
        console.log(err);

    }
      
    //not available users

    if(!users){
        return res.status(404).json({message:"Unable to update User Details"});
    }

    return res.status(200).json({users});
};

//Delete User Details
const deleteUser=async(req,res,next)=>{
    const id = req.params.id;

    let user;

    try{
        user=await User.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }

     //not available users

     if(!user){
        return res.status(404).json({message:"Unable to Delete"});
    }

    return res.status(200).json({user});


};


exports.getAllusers = getAllusers;
exports.addUsers=addUsers;
exports.getById=getById;
exports.UpdateUser=UpdateUser;
exports.deleteUser=deleteUser;


