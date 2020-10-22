import {Request, Response } from 'express';
import { getRepository, Index } from 'typeorm';
import orphanageView from '../views/orphanages_views';
import * as Yup from 'yup';
import Orphanage from '../models/Orphanage';
//objeto{}
export default {
    //listando orfanatos
    async Index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations:['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
    },
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations:['images']
        }); // tenta encontrar o orfanato com o id senao retorna erro

        return response.json(orphanageView.render(orphanage));
    },

    async create(request: Request, response: Response) {
    
        const {
            name,
            latitude,
            longitude,
            instructions,
            about,
            opening_hours,
            open_on_weekends,
        } = request.body;

        //repositorio
        const orphanagesRepository = getRepository(Orphanage);
        // salvado as imagens no metodo criate
        const requestImages = request.files as Express.Multer.File[]; // apenas dizendo que e um array

        const images = requestImages.map(image => {
            return {path:image.filename}
        })

        //validando
        const data = {
            name,
            latitude,
            longitude,
            instructions,
            about,
            opening_hours,
            open_on_weekends,
            images

        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            instructions: Yup.string().required(),
            about: Yup.string().required().max(300),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path:Yup.string().required() 
                })
            )
            });
        
        
        await schema.validate(data,{
            abortEarly:false,
        });
        //criando orfanato no BD
        const orphanage = orphanagesRepository.create(data);

        // salvando no BD
        await orphanagesRepository.save(orphanage);

        return response.json({orphanage});

   
  }
};