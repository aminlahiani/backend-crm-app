const express = require("express");
const Gouvernorat = require("../../../models/paramaitre/Governorat");

const auth = require("../../../middleware/auth");


const router = express.Router();


router.use(auth)
router.post("/api/create/gouvernorat", async (req, res) => {
    const { nom } = req.body
    try {
        const gouvernorat = new Gouvernorat({
             nom,
             abonnemenId : req.user.abonnemenId
          });
      await gouvernorat.save();
     
      res.status(201).send(gouvernorat);
    } catch (error) {
      res.status(400).send(error);
    }
  });


router.get("/api/gouvernorat" , async(req,res) => {
    const gouvernorats = await Gouvernorat.find({ abonnemenId : req.user.abonnemenId });
  //const gouvernorats = await Gouvernorat.find({ userId: req.user._id });
    res.status(200).send(gouvernorats);

})
router.get("/api/gouvernorat/:id" , async(req,res) => {
  const gouvernorat = await Gouvernorat.findById(req.params.id);

  res.status(200).send(gouvernorat);

})
router.delete("/api/gouvernorat/:id" , async(req,res) => {
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


module.exports = router ;