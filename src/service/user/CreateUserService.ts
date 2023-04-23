import primaClient from "../../prisma";

interface UserRequest {
   name: string;
   email: string;
   date_of_birth: string;
   ticket_id: string;
}

class CreateUserService {
   async execute({ name, email, date_of_birth, ticket_id }: UserRequest) {

      const user = await primaClient.user.create({
         data: {
            name: name,
            email: email,
            date_of_birth: date_of_birth,
            ticket_id: ticket_id, 
         },
         select: {
            name: true,
            email: true,
            date_of_birth: true,
            ticket_id: true,
         }
      })

      return user;
   }
}

export { CreateUserService }