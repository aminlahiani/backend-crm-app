
const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors')
const authRouter = require("./routes/auth")
const AbonnementRouter = require("./routes/abonnement")

const GouvernoratRouter = require("./routes/paramaitre/externe/gouvernorat")
const DeligationRouter = require("./routes/paramaitre/externe/deligation")
const SecteurRouter = require("./routes/paramaitre/externe/secteur")

const ProductRouter =  require("./routes/paramaitre/produit/produit")
const ProductFamilleRouter =  require("./routes/paramaitre/produit/productfamille")

const MedcienRoute =  require("./routes/paramaitre/medcien/medcien")
const SpecialitmedcinRouter =  require("./routes/paramaitre/medcien/specialitmedcin")

const app = express();
connectDB()
const Port = 8000 ;



app.use(express.json());
app.use(cors())
app.set("trust proxy", 1)


app.use(authRouter)
//app.use(taskRouter)
// abonnement Router
app.use(AbonnementRouter)

app.use(GouvernoratRouter)
app.use(DeligationRouter)
app.use(SecteurRouter)
// gerant Router


// Product Router
app.use(ProductFamilleRouter)
app.use(ProductRouter)

//app.use(superviseurRouter)



//medcien Router
app.use(SpecialitmedcinRouter)
app.use(MedcienRoute)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });


app.listen(Port  , console.log(`app listen en port ${Port}`) )

