const express = require("express");

const auth = require("../../../middleware/auth");
const Produit = require("../../../models/paramaitre/produits/produts");

const router = express.Router();

router.use(auth)

router.post("/api/create/produit", async (req, res) => {
   
try {
        const produit = new Produit({
            ...req.body,
            abonnemenId : req.user.abonnemenId
          });

      await produit.save();
     
      res.status(201).send(produit);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.get("/api/produit" , async(req,res) => {
    const produit = await Produit.find({ abonnemenId : req.user.abonnemenId });
  //const gouvernorats = await Gouvernorat.find({ userId: req.user._id });
    res.status(200).send(produit);
})

router.get("/api/produit/:id" , async(req,res) => {
    const produit = await Produit.findById(req.params.id)
    res.status(200).send(produit);
  })

  router.delete("/api/produit/:id" , async(req,res) => {
    await Produit.findByIdAndRemove(req.params.id);
   res.status(200).send(" Produit removed ");
  })

  router.patch('/api/produit/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nom', 'code' , "prixgrossiste" , "prixpharmacie" , "etat" , "familleId" , "SpecialiteId" , "deligationId" ]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const produit = await Produit.findById(req.params.id);

        if (!produit) {
            return res.status(404).send()
        }

        updates.forEach((update) => produit[update] = req.body[update])
        await produit.save()
        res.send(produit)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router ;