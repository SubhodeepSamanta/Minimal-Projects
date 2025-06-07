import {v4 as uuid} from 'uuid'
import {format} from 'date-fns'
import path,{dirname} from 'path'
import fs,{promises as fsp} from 'fs'
import { fileURLToPath } from 'url'

const __filename= fileURLToPath(import.meta.url);
const __dirname= dirname(__filename);

const logEvents= async (message,file)=>{
    const dateTime= `${format(new Date(), 'dd MM yyyy\tHH:mm:ss')}`;
    const logText= `${dateTime}\t${uuid()}\t${message}\n`;
    if(!fs.existsSync(path.join(__dirname,'..','logs'))) fsp.mkdir(path.join(__dirname,'..','logs'));
    await fsp.appendFile(path.join(__dirname,'..','logs',`${file}`),logText);
    return logText;
}

export const logger = (req,res,next)=>{
    const message= `${req.method}\t${req.headers.origin}\t${req.url}`;
    logEvents(message,'logFile.txt');
    next();
}

export default logEvents;