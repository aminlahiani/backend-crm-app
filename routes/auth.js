const express = require("express");

const auth1 = require("../middleware/auth");

const User = require("../models/user");

const router = express.Router();

router.post("/create/admin", async (req, res) => {
  const user = new User({
    ...req.body,
    role: "ADMIN",
  });
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/create/gerant", async (req, res) => {
  const user = new User({
    ...req.body,
    role: "GERANT",
  });
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});



router.post("/create/superviseur", async (req, res) => {
  const user = new User({
    ...req.body,
    role: "SUPERVISEUR",
  });
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});


router.post("/create/delegue", async (req, res) => {
  const user = new User({
    ...req.body,
    role: "DELIGUE",
  });
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    req.session.token = token;
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.get("/api/users", auth1, async (req, res) => {
  res.send(req.user);
});

router.patch("/user/me", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/user/me", async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/api/users/all", async (req, res) => {
  const users = await User.find().populate("abonnemenId")
  res.send(users);
});

router.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.send("abonnement deleted");
});


module.exports = router;
