import express, {Request, Response} from 'express';

const api = express()

api.use('/test', (req: Request, res: Response) => {
    res.json({ success: true })// RETORNA JSON
})

api.listen(5000, () => console.log('Express listening'))