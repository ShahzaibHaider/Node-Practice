const express = require("express");
const router=express.Router();

const user_controller= require("../controllers/user_controller")
router.get("/",user_controller.home);
router.post("/write",user_controller.write);
router.get("/read",user_controller.read);
router.put("/update",user_controller.update);
router.delete("/delete",user_controller.delete);

exports.routes = router;