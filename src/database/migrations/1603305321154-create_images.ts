//passando o id das imagens no BD
import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603305321154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'images',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned: true, //nao pdde ser negativo
                    isPrimary:true, //primarykey
                    isGenerated: true, //gerado automaticamente
                    generationStrategy:'increment', //autoincremente 1,2
                },
                {
                    name:'path',
                    type:'varchar',
                },
                {
                    name:'orphanage_id', //armazenando na imagem o id do orfanato/uma para uma
                    type:'integer',
                    
                }
            ],
            foreignKeys:[
                //cada chave fica em um objeto
                {
                    name:'ImageOrphanage',
                    columnNames: ['orphanage_id'], //o nome da coluna que vai armazenar o ralacionamento
                    referencedTableName:'orphanages',// qual tabela esta se relacionando
                    referencedColumnNames:['id'],// qual a coluna na tabela orfanatos que esse cara esta se ralacionando
                    onUpdate:'CASCADE',// caso o id do orfanato seja alterado com o cascade altera o id dentro da table de forma automatica
                    onDelete:'CASCADE',  // caso o orfanato seja deletado as imagens tbm  sao deletadas
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
