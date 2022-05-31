import {Request, Response} from 'express';
import shortid from 'shortid';
import { config } from '../config/Constants';
import { URlModel } from '../database/model/URL';

export class URLController {
   public async shorten(req: Request, response: Response): Promise<void> {
       // VER SE A URL JÁ EXISTE
       const { originURL } = req.body
       const url = await URlModel.findOne({ originURL })
       if (url) {
           response.json(url)
           return
       }
       // CRIAR O HASH PRA ESSA URL
       const hash = shortid.generate()
       const shortURL = `${config.API_URL}/${hash}`
       const novaURL = await URlModel.create({ hash, shortURL, originURL})
       // SALVAR A URL NO BANCO
       // RETORNAR A URL QUE SALVAMOS
       response.json({ novaURL })// RETORNA JSON
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        // PEGAR HASH DA URL
        const { hash } = req.params
        const url = await URlModel.findOne({ hash })
        // ENCONTRAR A URL ORIGINAL PELO HASH
        if (url) {
            response.redirect(url.originURL)
            return
            // REDIRECIONAR PARA A URL ORIGINAL A PARTIR DO QUE ENCONTRAMOS NO BANCO DE DADOS
        }
        
        response.status(400).json({error: 'URL não encontrada'})
    }
}