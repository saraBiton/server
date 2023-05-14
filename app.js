const express = require('express');
const db = require('./Config/db');
const app = express();
const func = require('./function')
const port = 8000;
const userRouter = require('./routers/userRouter');
const sensorRouter = require('./routers/sensorRoute1r');
// const calculateRescueRoute = require('./controllers/Lifeguard_system/calculateRescueRoute');
// const ProvidersRouter = require('./routers/ProvidersRouter')
const cors = require('cors');
const corsOptions ={ 
    origin: 'http://localhost:19006',
    credentials: true,
    optionSuccessStatus:200
}
// func.getDistance();
db();
// app.use('/calculation',calculateRescueRoute);
app.use(cors(corsOptions));
app.use(express.json());
app.use('/users', userRouter);
app.use('/sensors', sensorRouter);
// app.use('./Providers', userRouter);
app.listen(port, ()=>{
    console.log(`server running...`);
})
