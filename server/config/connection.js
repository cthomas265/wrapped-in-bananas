const mongoose = require("mongoose");

mongoose.connect(
  //AA - we can update name of mongoose database here if we need to
  process.env.MONGODB_URI || "mongodb://localhost:27017/user_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
