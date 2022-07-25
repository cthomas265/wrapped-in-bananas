const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return await User.find();
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
      return await User.findOne(where);
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
    deleteUser: async (parent, args, context, info) => {
      return await User.findByIdAndDelete(args._id);
    },
  },
};

module.exports = resolvers;
