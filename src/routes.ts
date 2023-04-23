import { Router } from 'express';

//Ticket
import { CreateTicketController } from './controller/ticket/CreateTicketController';
import { ListCreateController } from './controller/ticket/ListCreateController';

// User
import { CreateUserController } from './controller/user/CreateUserController';

const router = Router();

//Ticket
router.post('/ticket', new CreateTicketController().handle)
router.get('/ticket', new ListCreateController().handle)

//User
router.post('/users', new CreateUserController().handle)

export { router };