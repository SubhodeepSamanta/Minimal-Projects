import logEvents from "./logger.js";



const errorHandler= (err,req,res,next)=>{
    console.error(err);
    logEvents(` ${err.name}: ${err.message}`,'errorFile.txt');
    res.status(500).send(err.message)
}

export default errorHandler;