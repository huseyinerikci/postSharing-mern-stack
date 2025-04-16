const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, //her yeni kullanıcı oluşturulduğunda güncel tarih atanır
  },
});

module.exports = mongoose.model("auth", AuthSchema);
