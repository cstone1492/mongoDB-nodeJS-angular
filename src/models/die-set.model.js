module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          name: String,
          dieTypes: [Number],
        },
      );

      schema.method("toJSON", function() {
          const {_v, _id, ...object } = this.toObject();
          object.id = _id;
          return object;
      });
    
    const DieSet = mongoose.model("die-set", schema);
  
    return DieSet;
  };