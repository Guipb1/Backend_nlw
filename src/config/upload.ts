//multer = biblioteca para lidar com upload de arquivos
//config de como sera feito os uolaod da aplicacao
import { request } from 'express';
import multer from 'multer';
import path from 'path'; // para caminhos relativos

// exportandoobjeto com varias connfig
export default {
    storage: multer.diskStorage({  //salvando as imagens no disco=disc
        destination:path.join(__dirname, '..','..','uploads'),//onde sera jogado nossos arquivos quando fizer upload/ diretorioAtual e diretorio onde quero salvar
        filename:(request,file, cb) => {// funcao para dar um nome para o arquivo, se caso duas pessoas fizerem upload do arquivos com mesmo nome um vai sobreescrever o outro
            const fileName = `${Date.now()}-${file.originalname}`; 


            cb(null, fileName);
        },
    })  
};

