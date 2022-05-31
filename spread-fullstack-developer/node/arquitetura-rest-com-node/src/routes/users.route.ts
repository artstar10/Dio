import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {// BUSCAR TODOS OS USUÁRIOS
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:uuid', async (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {//BUSCAR USUÁRIO POR ID
    const uuid = req.params.uuid;
    const user = await userRepository.findById(uuid);
    res.status(200).send(user);
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {// CRIAR UM USUÁRIO
    const newUser = req.body;  
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {// ATUALIZAR UM USUÁRIO
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid

    await userRepository.update(modifiedUser)//deu erro https://web.dio.me/course/nodejs-com-bancos-de-dados-relacionais-sql/learning/f3c6ba0a-b2d9-45fb-9531-91e2b7e6c718?back=/track/spread-fullstack-developer&tab=undefined&moduleId=undefined minuto06:00

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {// ATUALIZAR UM USUÁRIO
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;