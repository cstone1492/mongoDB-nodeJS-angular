const db = require("../models");
const DieSet = db.dieSets;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a DieSet
    const dieSet = new DieSet({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
  
    // Save DieSet in the database
    dieSet
      .save(dieSet)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the DieSet."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    DieSet.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving dieSets."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    DieSet.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found DieSet with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving DieSet with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    DieSet.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update DieSet with id=${id}. Maybe DieSet was not found!`
          });
        } else res.send({ message: "DieSet was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating DieSet with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    DieSet.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete DieSet with id=${id}. Maybe DieSet was not found!`
          });
        } else {
          res.send({
            message: "DieSet was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete DieSet with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    DieSet.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} DieSets were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all dieSets."
        });
      });
  };