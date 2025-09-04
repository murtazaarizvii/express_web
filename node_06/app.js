const express=require('express');
const form=require('./routes/form');
const todo=require('./routes/todo');
const auth=require('./routes/auth');
const product=require('./routes/product')
const bodyParser=require('body-parser');
const path=require('path');
const cors = require('cors')
const { verify } = require('./middlewares/auth');
const app=express();
app.use((req,res,next)=>{{
    req.data ='ishaq';
    console.log(req.url);
    next(); 
}});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(process.cwd(),'public')));
app.set("view engine", "ejs");
app.set("views", "views");
// app.use((req,res,next)=>{
//    res.send(req.data);
// })
app.use('/form',form);

app.use('/todo',verify,todo);
app.use('/auth',auth);
app.use('/products',product)
app.listen(4000);

