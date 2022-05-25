
import express, {Request, Response, NextFunction} from "express";// EXPRESS É UM GERENCIADOR DE ROTAS

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'sucesso total! vocês são demais!!!'});
});// ENDPOINT: status

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})