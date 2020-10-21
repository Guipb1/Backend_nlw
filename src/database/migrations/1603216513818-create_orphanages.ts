import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603216513818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //REALIZAR ALTERAÇÕES
        // CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
        await queryRunner.createTable(new Table({
            name:'orphanages',
            columns: [
                {
                    name:'id',
                    type:'integer',
                    unsigned: true, //nao pdde ser negativo
                    isPrimary:true, //primarykey
                    isGenerated: true, //gerado automaticamente
                    generationStrategy:'increment', //autoincremente 1,2
                },
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name:'latitude',
                    type:'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name:'longitude',
                    type:'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name:'about',
                    type:'text'
                },
                {
                    name:'instructions',
                    type:'text'
                },
                {
                    name:'open_on_weekends',
                    type:'boolean',
                    default:false
                },
                
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //DESFAZER O QUE FOI FEITO NO UP
        await queryRunner.dropTable('orphanages');
    }

}
