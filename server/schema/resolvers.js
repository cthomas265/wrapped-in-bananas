const { User, Signature, Message } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return await User.find().populate("messages")
    },
    user: async (parent, args, context, info) => {
      if (!args._id && !args.email && !args.username) {
        throw new AuthenticationError(
          "You need to search for a user by _id, email, or username"
        );
      }

      const where = {};
      if (args._id) {
        where._id = args._id;
      }
      if (args.email) {
        where.email = args.email;
      }
      if (args.username) {
        where.username = args.username;
      }
      return await User.findOne(where).populate("messages")
    },
    signatures: async () => {
      return Signature.find();
    },
    messages: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Message.find(params).sort({ createdAt: -1 });
    },
  },
  Mutation: {
    login: async (parent, args, context, info) => {
      // find user by username
      const user = await User.findOne({ username: args.username });
      // if not found, throw error
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
      // validate password
      const isCorrectPW = await user.isCorrectPassword(args.password);
      // if not valid, throw error
      if (!isCorrectPW) {
        throw new AuthenticationError("Invalid password");
      }
      // sign token
      const token = signToken(user);
      // return Auth type
      return {
        token,
        user,
      };
    },
    addUser: async (parent, args, context, info) => {
      const newUser = await User.create(args);
      const token = signToken(newUser);
      return {
        user: newUser,
        token,
      };
    },
    updateUser: async (parent, args, context, info) => {
      return await User.findByIdAndUpdate(args._id, args, { new: true });
    },
    addSignature: async (parent, args, context, info) => {
      console.log(args);
      return await Signature.create(args);
    },
    addMessage: async (parent, args, context) => {
      if (context.user) {
        const message = await Message.create({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { messages: message._id } },
          { new: true }
        );
        return message;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateMessage: async (parent, args, context, info) => {
      if (context.user) {
        const foundMessage = await Message.findById(args._id);
        if (foundMessage.username === context.user.username) {
          const updatedMessage = await Message.findOneAndUpdate(
            { _id: args._id },
            args,
            { new: true }
          );
          return updatedMessage;
        } else {
          throw new AuthenticationError(
            "You are not allowed to update this post."
          );
        }
      }
    },
    deleteMessage: async (parent, args, context) => {
      if (context.user) {
        const messageToDelete = await Message.findById(args._id);
        console.log(messageToDelete)
        if (messageToDelete.username === context.user.username) {
         
          const deletedMessage = await Message.findByIdAndDelete(args._id)
          
          await User.findOneAndUpdate(
            { username: context.user.username },
            { $pull:  { messages: args._id }},
            { new: true }
          );
          return deletedMessage;
        } else {
          throw new AuthenticationError("Cannot delete this message.");
        }
      }
    },
  },
};

module.exports = resolvers;
