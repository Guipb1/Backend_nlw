import { Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// criando uma rota
// users = recurso
//metodo post = estou criando um orfanato
routes.get('/orphanages', OrphanagesController.Index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create); //array = faz upload de varias images

export default routes;