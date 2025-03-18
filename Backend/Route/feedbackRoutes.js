const express = require("express");
const router = express.Router();

//Insert Model
const user=require("../Model/feedbackModel");
//Insert User Controller
const feedback=require("../controlers/feedback");

router.get("/",feedback.getAllusers);
router.post("/",feedback.addUsers);
router.get("/:id",feedback.getById);
router.put("/:id",feedback.UpdateUser);
router.delete("/:id",feedback.deleteUser);
//export
module.exports=router;