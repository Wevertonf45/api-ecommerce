import type { IGetUsersController, IGetUsersRepository } from "./protocols.js";

class GetUsersController implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository) { }

    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();
            return {
                statusCode: 200,
                body: users
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: 'Internal server error'
            }
        }
    }
}