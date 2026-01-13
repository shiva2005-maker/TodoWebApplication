let express = require("express");
const { createTask,allTasks,deleteTask,editTask, updateTask, toggleDone } = require("../Controllers/TaskController");
let router = express.Router();


router.get("/",(req,res)=>{
    res.send("thiss is task")
});

router.post("/create",createTask)

router.get("/alltasks",allTasks) 

router.delete("/delete/:id",deleteTask);

router.get("/editTask/:id",editTask);

router.post('/updateTask/:id',updateTask)

router.post('/toggleDone/:id', toggleDone)

module.exports = router;