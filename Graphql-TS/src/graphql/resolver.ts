const { UserModel } = require("../models");

export const graphqlResolver = {
  async users() {
    try {
      const userList = await UserModel.find();
      return userList;
    } catch (error) {
      throw new Error(error);
    }
  },
}