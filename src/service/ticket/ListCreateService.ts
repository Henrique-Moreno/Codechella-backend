import primaClient from "../../prisma"

class ListTicketService{
    async execute() {
        const ticket = await primaClient.ticket.findMany({
            select: {
                id: true,
                name: true,
            }
        })
        return ticket
    }
}

export { ListTicketService }

