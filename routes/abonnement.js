
const Abonnement = require("../models/abonnement")
const User = require("../models/user")
const express = require("express")

const router = express.Router();

router.post("/api/abonnement/createe" , async (req, res, next) => {
    const { gerantEmail, gerantPassword, gerantNom , gerantPrenom } = req.body
    const newGerant = new User({
        nom: gerantNom,
        pernom : gerantPrenom ,
        email: gerantEmail,
        password: gerantPassword,
        role: "Gerant",
    })
    await newGerant.save()
    const abonnement = new Abonnement({
       ...req.body,
        gerant: newGerant._id
    })
    await abonnement.save()
    const abId =   newGerant.set({abonnemenId : abonnement._id})
    await abId.save()
    res.send({abonnement , newGerant})
})


router.get("/api/abonnement",async (req, res, next) => {
    const abonnement = await Abonnement.find({}).populate("gerant gerant.abonnemenId") 

    res.send(abonnement)
})


router.get("/api/abonnement/:id", async (req, res, next) => {
    const abonnement = await Abonnement.findById(req.params.id).populate("gerant")

    res.send(abonnement)
})


router.delete("/api/abonnement/:id" , async (req, res, next) => {
     await Abonnement.findByIdAndRemove(req.params.id)

    res.send("abonnement deleted " )
})

  /*
  router.delete("/api/abonnement/:id", async (req, res) => {
    try {
      const task = await Abonnement.findOneAndDelete({ _id: req.params.id });
  
      if (!task) {
        res.status(404).send();
      }
  
      res.send("task deleted");
    } catch (e) {
      res.status(500).send();
    }
  });
*/

module.exports = router ;