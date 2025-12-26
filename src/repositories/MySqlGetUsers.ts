import type { IGetUsersRepository } from "../controllers/getUsers/protocols.js";
import type { User } from "../models/User.js";

class MySqlGetUsers implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [];
    }
}