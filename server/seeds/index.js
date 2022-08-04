const connection = require("../config/connection");
const { User } = require("../models");
const { Message } = require("../models");

connection.on("open", async () => {
  // delete all users
  await User.deleteMany();
  // create new user (or array or users)
  await User.create(
    {
    username: "Test",
    email: "Test@gmail.com",
    password: "supersecretpass",
    classCode: "UofW-VIRT-BO-FSF-PT-02-2022-U-B-TTH"
  },
  {
    username: "wrapped-in-bananas",
    email: "bananas@gmail.com",
    password: "wrappedinbananas",
    classCode: "UofW-VIRT-BO-FSF-PT-02-2022-U-B-TTH"
  },
  {
    username: "bootcamp-coder",
    email: "bootcamp-coder@gmail.com",
    password: "bootcampcoder",
    classCode: "UofW-VIRT-BO-FSF-PT-02-2022-U-B-TTH"
  },
  {
    username: "githubGuru",
    email: "githubGuru@gmail.com",
    password: "githubGuru",
    classCode: "UofW-VIRT-BO-FSF-PT-02-2022-U-B-TTH"
  },
  );
  await Message.deleteMany();

  await Message.insertMany([
    {
      messageBody: "It was a pleasure working with all of you! 🙂 Happy Graduation!",
      username: "wrapped-in-bananas",
    },
    {
      messageBody: "What a great class! Congrats on making it through!",
      username: "bootcamp-coder",
    },
    {
      messageBody: "WE DID IT!! Great work throughout the course everybody 🥳",
      username: "githubGuru",
    },
  ])
  process.exit(0);
});
