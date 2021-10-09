"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlResolver = void 0;
const { UserModel } = require("../models");
exports.graphqlResolver = {
    async users() {
        try {
            const userList = await UserModel.find();
            return userList;
        }
        catch (error) {
            throw new Error(error);
        }
    },
};
//# sourceMappingURL=resolver.js.map