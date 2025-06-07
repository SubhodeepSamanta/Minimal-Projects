import express from 'express'
import {logger} from './utils/logger.js';
import errorHandler from './utils/errorHandler.js';

const PORT=5768;
const app=express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})

