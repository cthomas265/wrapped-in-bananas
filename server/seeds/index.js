const connection = require("../config/connection");
const { User } = require("../models");
const { Message } = require("../models");

connection.on("open", async () => {
  // delete all users
  await User.deleteMany();
  // create new user (or array or users)
  await User.create({
    username: "Test",
    email: "Test@gmail.com",
    password: "supersecretpass",
    classCode: "UofW-VIRT-BO-FSF-PT-02-2022-U-B-TTH"
  });
  await Message.deleteMany();

  await Message.insertMany([
    {
      messageBody: "It was a pleasure working with all of you!",
      username: "Test",
    },
    {
      messageBody: "What a great class!",
      username: "Test",
    }])
  process.exit(0);
});
