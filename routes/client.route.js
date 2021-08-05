const express = require("express");
const router = express.Router();
const controller = require("../controllers/client.controller");

// GET
router.get("/", controller.retrieve);
router.get("/:id" , controller.retrieveOne);

//POST
router.post("/", controller.create);

//delete
router.delete("/:id", controller.delete);

//put
router.put("/:id", controller.update);

module.exports = router;