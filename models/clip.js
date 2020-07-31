let moogoose = require("mongoose");

// SCHEMA SETUP
let clipSchema = new moogoose.Schema({
  speaker: String,
  title:   String,
  iamge:    String,
  desc:    String,
  clipUrl:    String,
  date:   String,
  postedBy: {
    id: {
      type: moogoose.Schema.Types.ObjectId,
      ref:  "User"
    },
    username: String
  },
  clipComments: [
    {
    type: moogoose.Schema.Types.ObjectId,
    ref:  "ClipComment"
    }

  ]
});

module.exports = mongoose.model("Clip", clipSchema);