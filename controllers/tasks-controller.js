const Task = require('../models/tasks-model');

const getAllTasks = async (req,res)=>{
    // res.send("Get all tasks and list them");
    try {
        const allTasks = await Task.find({});
        res.status(200).json({ allTasks });  
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
};

// const createTask = (req,res)=>{
//     res.json(req.body);
// };

// To create task, we will use the create function available for mongoose models.
// We will pass the body of the client request to the create() function, since this body is already in JSON.

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body); // Addition - Set a proper error response.
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({msg:error});
    }
    
    
}

const getSingleTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const singleTask = await Task.findOne({_id:taskID});
        if(!singleTask){
            return res.status(404).json({ msg: `No task with id ${taskID}` });
            // For id with same number of characters as ones in db, but not a real id.
        }
        res.status(200).json({ singleTask }); 
    } catch (error) {
        res.status(500).json({ msg: error });
        // For id with different number of characters (CastError).
    }
    
};

const updateTask = async (req,res)=>{
    try {
        const updateTask = await Task.findOneAndUpdate({name:"Task 1"});
        res.status(200).json({ updateTask })
    } catch (error) {
        res.status(500).json({msg:error});
    }
};

const deleteTask = (req,res)=>{
    res.send("Delete task");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}