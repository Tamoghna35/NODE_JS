//Create Express Server
const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDb();
const app =express();
const port =process.env.PORT|| 5000;
// app.get('/api/contacts',(req,res)=>{
//     res.send('get all contacts');
// })
app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
//this will listen the port which is on port 5000 and return a claaback
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server runningbon port ${port}`);
}
);