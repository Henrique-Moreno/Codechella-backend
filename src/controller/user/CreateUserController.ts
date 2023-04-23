import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";

class CreateUserController{
    async handle(req: Request, res: Response) {

        const {name, email, date_of_birth, ticket_id} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, date_of_birth, ticket_id });

        return res.json(user)
    }
}

export {CreateUserController}