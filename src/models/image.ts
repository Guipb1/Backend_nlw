//salvando a imagem  no BD
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

// decorator = para integrar a classe com o typeorm
@Entity ('images')
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    path:string;

    @ManyToOne(() => Orphanage, orphanage =>orphanage.images)
    @JoinColumn({name:'orphanage_id'})
    orphanage: Orphanage; // nesse caso nao e array pois a imagem pertence a um orfanato

}