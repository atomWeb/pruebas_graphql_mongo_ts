import {
  Entity,
  Column,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class User {
  // @PrimaryGeneratedColumn() _id: ObjectID;
  @ObjectIdColumn() id: ObjectID;
  @Column() fullName: string;
  @Column({ unique: true }) email: string;
  @Column({ unique: true }) username: string;
  @Column() password: string;
  @CreateDateColumn() createdAt: Date;
}
