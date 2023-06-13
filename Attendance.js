const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/DiemDanhPhatDuong", {
  useNewUrlParser: true,
});

const RecordsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  attendanceType: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
    default: Date.now,
  },
});

const Records = mongoose.model('Records', RecordsSchema);
module.exports = Records

var r = Records.find()
console.log('this is r: ',r);