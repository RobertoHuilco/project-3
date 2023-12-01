import { BookEntity } from "src/book/entities/book.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    iduser: number;
    @Column()
    nombreuser: string;
    // aqui va la relacion
    @OneToMany(()=>BookEntity,books=>books.users)
    libros:BookEntity[];
}
