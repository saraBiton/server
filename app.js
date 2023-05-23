import  express from 'express';
import connectDB from './src/Config/db';
const app = express();
const func = require('./src/controllers/Function/CalculationDistance')
const port = 8000;
const userRouter = require('./src/routers/userRouter');
const sensorRouter = require('./src/routers/sensorRouter');
const loginRouter = require('./src/routers/loginRouter')
const cors = require('cors');
connectDB();
app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/sensors', sensorRouter);
app.use('/login', loginRouter);
app.listen(port, ()=>{
    console.log(`server running...`);
})
