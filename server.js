
const express = require('express');
const connectDB = require('./config/db');

const session = require('express-session')
const cors = require('cors')
const authRouter = require("./routes/auth")
const AbonnementRouter = require("./routes/abonnement")
const GouvernoratRouter = require("./routes/paramaitre/externe/gouvernorat")
const DeligationRouter = require("./routes/paramaitre/externe/deligation")
const SecteurRouter = require("./routes/paramaitre/externe/secteur")
const ProductFamilleRouter =  require("./routes/paramaitre/produit/productfamille")

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

app.use(GouvernoratRouter)
app.use(DeligationRouter)
app.use(SecteurRouter)
// gerant Router

app.use(ProductFamilleRouter)
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

