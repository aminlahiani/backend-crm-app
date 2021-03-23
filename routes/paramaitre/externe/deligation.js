const express = require("express");
const Deligation = require("../../../models/paramaitre/Deligation");


const auth = require("../../../middleware/auth");


const router = express.Router();


router.use(auth)


router.post("/api/create/deligation", async (req, res) => {
    const { nom , governoratId} = req.body
    try {
        const deligation = new Deligation({
             nom ,
             governoratId,
             abonnemenId : req.user.abonnemenId
          });
      await deligation.save();
     
      res.status(201).send(deligation);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  router.get("/api/deligation" , async(req,res) => {
    const deligations = await Deligation.find({ abonnemenId : req.user.abonnemenId }).populate("governoratId");
 
    res.status(200).send(deligations);

}) 

router.get("/api/deligation/:id" , async(req,res) => {

  const deligation = await Deligation.findById(req.params.id).populate("governoratId");;

  res.status(200).send(deligation);

})

router.delete("/api/deligation/:id" , async(req,res) => {
  await Deligation.findByIdAndRemove(req.params.id);

 res.status(200).send(" deligation removed ");

})
/*

r.delete("/api/gouvernorat/:id" , async(req,res) => {
   await Gouvernorat.findByIdAndRemove(req.params.id);

  res.status(200).send(" gouvernorat removed ");

})

router.patch("/api/gouvernorat/:id" , async(req,res) => {

  const governorat = await Gouvernorat.findById(req.params.id);

  const newname = req.body.nom;

    governorat.nom =  newname ;

    governorat.save()

 res.status(200).send(governorat);

})
*/

module.exports = router ;