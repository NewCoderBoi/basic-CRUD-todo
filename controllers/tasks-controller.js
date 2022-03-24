const Task = require('../models/tasks-model');

const getAllTasks = async (req,res)=>{
    // res.send("Get all tasks and list them");
    try {
        const all_tasks = await Task.find({});
        res.status(200).json({ all_tasks });  
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
        const {id:taskID} = req.params;
        const taskToBeUpdated = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new: true,
            runValidators: true
        });
        if(!taskToBeUpdated){
            return res.status(404).json({msg:`No task with id ${taskID}`});
        }
        res.status(200).json({ taskToBeUpdated });
    } catch (error) {
        res.status(500).json({msg:error});
    }
};

const deleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const taskToBeDeleted = await Task.findOneAndDelete({_id:taskID});
        if(!taskToBeDeleted){
            return res.status(404).json({ msg: `No task with id ${taskID}` });
        }
        res.status(200).json({ taskToBeDeleted });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}