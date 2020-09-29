module.exports = app => {
    const dieSets = require("../controllers/die-set.controller.js");
  
    var router = require("express").Router();
  
    // Create a new DieSet
    router.post("/", dieSets.create);
  
    // Retrieve all DieSets
    router.get("/", dieSets.findAll);
  
    // Retrieve a single DieSet with id
    router.get("/:id", dieSets.findOne);
  
    // Update a DieSet with id
    router.put("/:id", dieSets.update);
  
    // Delete a DieSet with id
    router.delete("/:id", dieSets.delete);
  
    // Create a new DieSet
    router.delete("/", dieSets.deleteAll);
  
    app.use('/api/dieSets', router);
  };