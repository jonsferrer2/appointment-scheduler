import mongoose, { Schema, Document } from "mongoose";

interface IMember extends Document {
    firstName: string,
    lastName: string,
    middleName?: string,
    suffix?: string,
    mobileNumber: string,
    email: string,
    sessionToken?: string
}

const memberSchema = new Schema<IMember>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: String,
    suffix: String,
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    sessionToken: String
});

export const Member = mongoose.model<IMember>("Member", memberSchema);