import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn  } from 'typeorm';
import Image from './image';
// decorator = para integrar a classe com o typeorm
@Entity ('orphanages')
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name: string;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column()
    about: string;

    @Column()
    instructions: String;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;


    @OneToMany(() => Image, image => image.orphanage, {
        cascade:['insert', 'update']
    })
    @JoinColumn({ name:'orphanage_id'})// qual o nome da coluna que armazenamente o relacionamento de orfanato com image/ se nao colocar o typeorm usa camelCase
    images: Image[]; // como um orfanato tem varias imagens fica em array []
}


// i preciso ntegrar essa classe com o typeorm
// todos com column sao colunas no BD