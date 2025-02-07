import { ErrorHandler } from "../../models/error-handler.model";
import { getUsers, getUserById } from "../../models/user.model";

export const getAllUsers = async () => {
    return await getUsers();
}

export const getUser = async (id: string) => {
    const user = await getUserById(id);

    if (!user) {
        throw new ErrorHandler(404, "User not found");
    }

    return user;
}