const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
    },
    RegistrationDate: {
      type: Date,
      required: false,
    },
    UserRoleId: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("User", UserSchema);
