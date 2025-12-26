import type { User } from "../../models/User.js";
import type { HttpResponse } from "../protocols.js";

export interface IGetUsersController {
    handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
    getUsers(): Promise<User[]>
}