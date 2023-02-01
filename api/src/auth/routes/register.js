const { Router } = require("express");
const router = Router();

const { RegisterUser } = require("../controller/AuthController");

router.post("/", (req, res) => {
  // console.log(regex.test(req.body.password));
  RegisterUser(req.body.email, req.body.password, req.body.username, (err) => {
    if (err) {
      // console.error(err);
      res.json(err.message);
      return;
    }

    res.status(200).send();
  });
});

module.exports = router;
