// import { UserModel } from "../model/user";
import mongoose = require("mongoose");
//mongodb://localhost:27017/graphql-ts  // mongodb compass local


export const ConnectDB = async (): Promise<void> => {
  const pass: string = "password1234";
  await mongoose
    .connect(
      `mongodb+srv://Mongodb:${pass}@cluster0.mqi0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    console.log("ok");
    // nếu IP lỗi vào xóa IP up lại
    // const newUser = new UserModel({
    //   // check connect db
    //   name: "Mai Quoc Huy",
    //   email: "Mai Quoc Huy",
    //   password: "Mai Quoc Huy",
    //   phone: "Mai Quoc Huy",
    //   role: "Mai Quoc Huy",
    // });
    // newUser.save();
};
