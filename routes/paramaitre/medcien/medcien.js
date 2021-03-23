const express = require("express");

const auth = require("../../../middleware/auth");
const Medcien = require("../../../models/paramaitre/medciens/medciens");
const Secretaire = require("../../../models/paramaitre/medciens/secretaire");


const router = express.Router();

router.use(auth)



router.post("/api/medcient/createe" , async (req, res, next) => {

    const { SecretaireEmail, SecretaireName, SecretairePrenom , Secretairetelephone} = req.body
    const newSecretaire = new Secretaire({
        nom: SecretaireName,
        email: SecretaireEmail,
        prenom: SecretairePrenom,
        telephone: Secretairetelephone,
    })
    await newSecretaire.save()
    const medcin = new Medcien({
       ...req.body,
       secretaireId: newSecretaire._id ,
        abonnemenId : req.user.abonnemenId
    })
    await medcin.save()

    res.send({medcin , newSecretaire})
})

router.get("/api/medcient" , async(req,res) => {

    const medcin = await Medcien.find({ abonnemenId : req.user.abonnemenId }).populate("secretaireId")
  //const gouvernorats = await Gouvernorat.find({ userId: req.user._id });
    res.status(200).send(medcin);
})
router.get("/api/medcient/:id" , async(req,res) => {

  const medcin = await Medcien.findById(req.params.id).populate("secretaireId");;

  res.status(200).send(medcin);

})

router.delete("/api/medcient/:id" , async(req,res) => {
  await Medcien.findByIdAndRemove(req.params.id);

 res.status(200).send(" Medcien removed ");

})

module.exports = router ;