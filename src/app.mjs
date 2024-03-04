import  express, {json}  from "express";
import { custRouter } from "./routes/customerRouter.mjs";
import  morgan  from "morgan";
import {__dirname} from './utils.mjs';
import path from "path";


const app = express();

//Middelwares 
app.use(json())
app.use(morgan('dev'));


//Routes

app.use('/products',custRouter);
app.use(express.static(path.join(__dirname, 'public')));

// settings

app.set('port',  process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});
