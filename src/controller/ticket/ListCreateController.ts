import { Request, Response } from "express";
import { ListTicketService } from "../../service/ticket/ListCreateService";

class ListCreateController{
    async handle(req: Request, res: Response) {
        const listTicketService = new ListTicketService();

        const ticket = await listTicketService.execute();

        return res.json(ticket)
    }
}

export { ListCreateController }
