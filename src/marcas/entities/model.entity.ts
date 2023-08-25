import { User } from "../../users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Marca } from "./marca.entity";


@Entity()
export class Model {

    @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'int4', nullable: false })
  marca_id: number;
  @ManyToOne( ()=> Marca)
  @JoinColumn({
    name: 'marca_id', 
    referencedColumnName: 'id',
})
 Marca:Marca;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'int4', nullable: false })
  user_id: number;
  @ManyToOne( () => User)
  @JoinColumn({
    name: 'user_id', 
    referencedColumnName: 'id',
})
 autor:User;
}
