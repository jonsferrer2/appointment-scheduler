import { IRegisterInput, IMemberRegisterInput } from "./auth.interfaces";
import { ErrorHandler } from "../../models/error-handler.model";
import { getUserByEmail, createUser, updateUserById } from "../../models/user.model";
import { hashString, verifyPassword } from "../../utils/helpers";
import { getMemberByEmail, getMemberByNumber, createMember } from "../../models/member.model";

export const createUserService = async (data: IRegisterInput) => {

    const { email, firstName, lastName, middleName, password } = data;

    if (!email || !firstName || !lastName || !password) {
        throw new ErrorHandler(422, "Missing required fields");
    }

    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
        throw new ErrorHandler(409, "Email has already been taken");
    }

    const obj = {
        firstName,
        lastName,
        middleName,
        email,
        password: await hashString(password),
        sessionToken: ""
    }

    return await createUser(obj);
}

export const loginService = async (data: { email: string, password: string }) => {

    const { email, password } = data;

    if (!email || !password) {
        throw new ErrorHandler(422, "Missing required fields");
    }

    const user = await getUserByEmail(email).select("+password").lean();
    if (!user) {
        throw new ErrorHandler(404, "User not found");
    }

    const isPasswordMatch = await verifyPassword(user.password, password);
    if (!isPasswordMatch) {
        throw new ErrorHandler(401, "Incorrect email or password");
    }

    const sessionToken = await hashString(user._id.toString());
    const updatedUser = await updateUserById(user._id.toString(), { sessionToken }).select("+sessionToken");

    return updatedUser;
}

export const createNewMember = async (body: IMemberRegisterInput) => {
    const { firstName, lastName, middleName = "", suffix = "", email, mobileNumber } = body;

    if (!firstName || !lastName || !email || !mobileNumber) {
        throw new ErrorHandler(422, "Missing required fields");
    }

    const existingEmail = await getMemberByEmail(email);
    if (existingEmail) {
        throw new ErrorHandler(409, "Email has already been taken");
    }

    const existingMobileNumber = await getMemberByNumber(mobileNumber);
    if (existingMobileNumber) {
        throw new ErrorHandler(409, "Mobile number has already been taken");
    }

    const obj = {
        firstName,
        lastName,
        middleName,
        suffix,
        email,
        mobileNumber,
        sessionToken: ""
    }

    return await createMember(obj);
}
