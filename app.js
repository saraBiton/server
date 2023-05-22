const express = require('express');
const db = require('./Config/db');
const app = express();
const func = require('./controllers/Function/CalculationDistance')
const port = 8000;
const userRouter = require('./routers/userRouter');
const sensorRouter = require('./routers/sensorRouter');
const loginRouter = require('./routers/loginRouter')
const cors = require('cors');
db();
app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/sensors', sensorRouter);
app.use('/login', loginRouter);
app.listen(port, ()=>{
    console.log(`server running...`);
})
