import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    title: string;
    @Column()
    category: string;
    @Column()
    author: string;
    @Column()
    country: string;
    @Column()
    yearPublic: number;
}
