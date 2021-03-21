const jwt = require('jsonwebtoken')

const Admin = require('../models/Admin')
const Delegue = require('../models/delegue')
const Gerant = require('../models/gerant')
const Superviseur = require('../models/superviseur')


const auth = async (req, res, next) => {
  try {
      
      const token = req.session.token
      console.log(token)
      
      const decoded = jwt.verify(token, 'thisismynewcourse')
      console.log(decoded)
       
      
    let user

      if(decoded.role === "ADMIN"){
          user = await Admin.findOne({ _id: decoded._id })
      }else if(decoded.role === "GERANT") {
        user = await Gerant.findOne({ _id: decoded._id })
      } else if(decoded.role === "SUPERVISEUR") {
        user = await Superviseur.findOne({ _id: decoded._id })
      }else{
        user = await Delegue.findOne({ _id: decoded._id })
      }
      

      if (!user) {
          throw new Error()
      }
      
      req.token = token
      req.user = user
      next()
  } catch (e) {
      res.status(401).send({ error: ' Not authenticate.' })
  }
}

module.exports = auth
