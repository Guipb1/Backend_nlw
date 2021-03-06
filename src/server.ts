import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express(); // ajuda a lidar com as requisicoes e respostas

app.use(cors());
app.use(express.json()); //dizer ao express que estamos utlizando jsnon
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler);

app.listen(3333);

    //teste

//REQ / RESP
//localhost:3333

// metodos http = GET, POST , PUT, DELETE
//GET = Buscar uma informaçaõ (lista, item)]
// POST = criando uma informação 
// PUT = editando uma informação
// delete = Deletando uma informação

//Paramentros
//Query: http://localhost:3333/users?search=diego& sao enviado diretona propria rota, fazer uma busca/filtro
//Route Params: http://localhost:3333/usars/1 / para identificar um recurso, preciso identificar qual é o ID do recurso
//body: http://localhpst:3333/users  /neviar dadosnque nao caiba nos outros paramentros que as vezes vem de formulario

// node acessar p banco de dados = yarn add typeorm sqlite3
//formas de lidar com banco de dados na aplicação backend
   //driver nativo = sqlite3 permite executar as querys do banco direto no node, sem abstração
   // Query builder =  KNEX.JS escreve as querys em js 
   //ORM  / cada classe representa uma tabela no BD, relacona objetos e classes com as tabelas, todo retorno no BD gera uma instancia/objeto 