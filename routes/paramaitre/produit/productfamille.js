const express = require("express");

const auth = require("../../../middleware/auth");
const Productfamille = require("../../../models/paramaitre/produits/famille_produit");
const router = express.Router();

router.use(auth)


router.post("/api/create/productfamille", async (req, res) => {
    const { nom } = req.body
    try {
        const productfamille = new Productfamille({
             nom ,
             abonnemenId : req.user.abonnemenId
          });
      await productfamille.save();
     
      res.status(201).send(productfamille);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  router.get("/api/productfamille" , async(req,res) => {
    const productfamille = await Productfamille.find({ abonnemenId : req.user.abonnemenId });
 
    res.status(200).send(productfamille);

}) 

router.get("/api/productfamille/:id" , async(req,res) => {

  const productfamille = await Productfamille.findById(req.params.id)

  res.status(200).send(productfamille);

})

router.delete("/api/productfamille/:id" , async(req,res) => {
  await Productfamille.findByIdAndRemove(req.params.id);

 res.status(200).send(" Productfamille removed ");

})

router.patch("/api/productfamille/:id" , async(req,res) => {

    const productfamille = await Productfamille.findById(req.params.id);
  
    const newname = req.body.nom;
  
     productfamille.nom =  newname ;
  
     productfamille.save()
  
   res.status(200).send(productfamille);
  
  })

module.exports = router ;