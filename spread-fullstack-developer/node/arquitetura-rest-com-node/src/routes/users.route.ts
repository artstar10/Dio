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

usersRoute.put('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {// ATUALIZAR UM USUÁRIO
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {// ATUALIZAR UM USUÁRIO
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;