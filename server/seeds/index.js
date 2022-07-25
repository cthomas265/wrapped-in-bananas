const connection = require("../config/connection");
const { User } = require("../models");

connection.on("open", async () => {
  // delete all users
  await User.deleteMany();
  // create new user (or array or users)
  await User.create({
    username: "Test",
    email: "Test@gmail.com",
    password: "supersecretpass",
  });
  process.exit(0);
});
