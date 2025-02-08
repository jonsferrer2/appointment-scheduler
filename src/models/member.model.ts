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
    sessionToken: { type: String, select: false }
});

export const Member = mongoose.model<IMember>("Member", memberSchema);

export const createMember = (data: Record<string, any>) => new Member(data)
    .save()
    .then(member => member.toObject());
export const getMembers = () => Member.find();
export const getMemberById = (id: string) => Member.findById(id);
export const getMemberByEmail = (email: string) => Member.findOne({ email });
export const getMemberByNumber = (mobileNumber: string) => Member.findOne({ mobileNumber });
export const getMemberBySessionToken = (sessionToken: string) => Member.findOne({ sessionToken });