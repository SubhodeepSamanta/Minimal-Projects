import express from 'express'
import bookRouter from './routes/books.routes.js';
import { connectDB } from './config/mongo.config.js';

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT= process.env.PORT;
connectDB();


app.use('/api',bookRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})