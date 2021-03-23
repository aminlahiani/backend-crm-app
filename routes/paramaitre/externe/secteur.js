const express = require("express");

const auth = require("../../../middleware/auth");
const Secteur = require("../../../models/paramaitre/Secteur");




const router = express.Router();


router.use(auth)



router.post("/api/create/secteur", async (req, res) => {
    const { nom  , productfamilleId , governoratId } = req.body
    console.log(req.body)
    try {
        const secteur = new Secteur({
             nom,
             productfamilleId,
             governoratId ,
             abonnemenId : req.user.abonnemenId
          });
       
      await secteur.save();
    
     
      res.status(201).send(secteur);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.get("/api/secteur" , async(req,res) => {
    const secteurs = await Secteur.find({ abonnemenId : req.user.abonnemenId });
  //const gouvernorats = await Gouvernorat.find({ userId: req.user._id });
    res.status(200).send(secteurs);
})

router.get("/api/secteur/:id" , async(req,res) => {
    const secteur = await Secteur.findById(req.params.id);
  
    res.status(200).send(secteur);
  
  })
  router.delete("/api/secteur/:id" , async(req,res) => {
    await Secteur.findByIdAndRemove(req.params.id);
 
   res.status(200).send(" Secteur removed ");
 
 })

 router.put("/api/secteur/:id" , async(req,res) => {

    const secteur = await Secteur.findById(req.params.id);
  
     const {nom ,  productfamilleId , governoratId } = req.body
  
     secteur.nom =  nom ;
     secteur.productfamilleId = productfamilleId ;
     secteur.governoratId = governoratId;
    
     const result = await secteur.save();
  
    res.status(200).send(result);
  
  })

module.exports = router ;