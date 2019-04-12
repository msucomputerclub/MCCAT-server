const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ]
});

module.exports = Meeting = mongoose.model("meeting", meetingSchema);
