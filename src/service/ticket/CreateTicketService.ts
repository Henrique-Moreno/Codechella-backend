import primaClient from "../../prisma";

interface TicketRequest{
    name: string;
}

class CreateTicketService {
    async execute({name}: TicketRequest){
        
        const ticket = await primaClient.ticket.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true,
            }
        })
        return ticket;
    }
}

export {CreateTicketService}