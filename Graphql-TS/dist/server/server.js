"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose = require("mongoose");
const ConnectDB = async () => {
    const pass = "password1234";
    await mongoose
        .connect(`mongodb+srv://Mongodb:${pass}@cluster0.mqi0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    console.log("ok");
};
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=server.js.map