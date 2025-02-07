import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    firstName: string,
    lastName: string,
    middleName?: String,
    email: string,
    password: string,
    sessionToken?: string,
}

const userSchema: Schema<IUser> = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: String,
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    sessionToken: { type: String, select: false },
});

userSchema.set("toObject", {
    transform: (doc, ret) => {
        delete ret.password;
        delete ret.sessionToken;
        return ret;
    }
});

export const User = mongoose.model("User", userSchema);

export const getUsers = () => User.find();

export const getUserBySessionToken = (sessionToken: string) =>
    User.findOne({ sessionToken });

export const getUserById = (id: string) => User.findById(id);

export const getUserByEmail = (email: string) => User.findOne({ email });

export const createUser = (data: Record<string, any>) => new User(data)
    .save()
    .then((user) => user.toObject());

export const updateUserById = (id: string, data: Record<string, any>) =>
    User.findByIdAndUpdate(id, data, { new: true });

export const deleteUserById = (id: string) => User.findOneAndDelete({ _id: id });