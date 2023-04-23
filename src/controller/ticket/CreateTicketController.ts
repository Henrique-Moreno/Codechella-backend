import { Request, Response } from "express";
import { CreateTicketService } from "../../service/ticket/CreateTicketService";

class CreateTicketController {
    async handle(req: Request, res: Response) {

        const { name } = req.body;
        
        const createTicketService = new CreateTicketService();

        const ticket = await createTicketService.execute({ name });

        return res.json(ticket);
    }
}

export {CreateTicketController}