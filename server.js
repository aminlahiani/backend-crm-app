
const express = require('express');
const connectDB = require('./config/db');

const session = require('express-session')
const cors = require('cors')
const authRouter = require("./routes/auth")
const AbonnementRouter = require("./routes/abonnement")

const app = express();
connectDB()
const Port = 8000 ;



app.use(express.json());
app.use(cors())
app.set("trust proxy", 1)
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    
  })
);


app.use(authRouter)
//app.use(taskRouter)
// abonnement Router
app.use(AbonnementRouter)
// admin Router
//app.use(adminRouter)
// gerant Router
//app.use(gerantRouter)
// supirviseur Router
//app.use(superviseurRouter)

// delegue router

//app.use(delegueRoute)



app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });


app.listen(Port  , console.log(`app listen en port ${Port}`) )

