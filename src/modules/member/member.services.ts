import { ErrorHandler } from "../../models/error-handler.model";
import { IMemberRegisterInput } from "./member.interfaces";

export const createMember = async (body: IMemberRegisterInput) => {
    const { firstName, lastName, middleName = "", suffix = "", email, mobileNumber } = body;

    if (!firstName || !lastName || !email || !mobileNumber) {
        throw new ErrorHandler(422, "Missing required fields");
    }
}