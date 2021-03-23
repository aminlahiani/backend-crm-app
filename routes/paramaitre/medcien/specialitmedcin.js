const express = require("express")


const auth = require("../../../middleware/auth");
const Specialitmedcin = require("../../../models/paramaitre/medciens/specialitmedcin");


const router = express.Router();

router.use(auth)

router.post("/api/create/specialitmedcin", async (req, res) => {
    const { nom } = req.body
    try {
        const gouvernorat = new Specialitmedcin({
             nom,
             abonnemenId : req.user.abonnemenId
          });
      await gouvernorat.save();
     
      res.status(201).send(gouvernorat);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  router.get("/api/specialitmedcin" , async(req,res) => {
    const specialitmedcin = await Specialitmedcin.find({ abonnemenId : req.user.abonnemenId });
  //const gouvernorats = await Gouvernorat.find({ userId: req.user._id });
    res.status(200).send(specialitmedcin);

})

router.get("/api/specialitmedcin/:id" , async(req,res) => {

    const specialitmedcin = await Specialitmedcin.findById(req.params.id)
  
    res.status(200).send(specialitmedcin);
  
  })
  
  router.delete("/api/specialitmedcin/:id" , async(req,res) => {
    await Specialitmedcin.findByIdAndRemove(req.params.id);
  
   res.status(200).send(" specialitmedcin removed ");
  
  })
  
  router.patch("/api/specialitmedcin/:id" , async(req,res) => {
  
      const specialitmedcin = await Specialitmedcin.findById(req.params.id);
    
      const newname = req.body.nom;
    
      specialitmedcin.nom =  newname ;
    
      specialitmedcin.save()
    
     res.status(200).send(specialitmedcin);
    
    })
  

module.exports = router ;