
import express, {Request, Response, NextFunction} from "express";// EXPRESS É UM GERENCIADOR DE ROTAS
import usersRoute from "./routes/users.route";

const app = express();

// Configurações de aplicação para trabalahr com json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Configurações de Rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'sucesso!'});
});// ENDPOINT: status

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})