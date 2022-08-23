import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  BeforeInsert,
} from "typeorm";
import Model from "./model.entity";
import * as bcrypt from "bcrypt";
@Entity()
export class UserModel extends Model {
  @PrimaryGeneratedColumn()
  id: string;

  @Index("email_index")
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  contact_no: string;

  @Column()
  country: string;

  @Column()
  age: string;

  @Column()
  office: string;

  @Column()
  experience: string;

  @Column()
  profession: string;

  toJSON() {
    return { ...this, password: undefined, verified: undefined };
  }

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
    console.log(this.password, "password");
  }
  static async comparePasswords(
    candidatePassword: string,
    hashedPassword: string
  ) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }
}
