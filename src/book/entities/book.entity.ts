import { User } from "src/user/entities/user.entiti";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookEntity {
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
    // aqui va la relacion
    @ManyToOne(()=>User,users=>users.libros)
    users:User[];
}
