const express = require('express');
const tasks = require('./routes/tasks-routes');
const connectDB = require('./db/db-connection'); 
// This variable holds a connected database. When db is connected only then we spin up server.
require('dotenv').config();

const app = express();

const port = 3000;

app.use(express.json()); // Express JSON Middleware, used to parse incoming requests with JSON payloads.

app.get('/welcome', (req,res)=>{
    res.send(`Welcome to basic backend lessons`);
});

app.use('/api/v1/tasks', tasks);

const startServer = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port , ()=>{
            console.log(`Server running at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();

