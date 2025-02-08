import { ErrorHandler } from "../../models/error-handler.model";
import { getMembers, getMemberById } from "../../models/member.model";

export const onGetMembers = async () => {
    return await getMembers();
}

export const onGetMemberById = async (id: string) => {
    const user = await getMemberById(id);

    if (!user) {
        throw new ErrorHandler(404, "Member not found.");
    }

    return user;
}