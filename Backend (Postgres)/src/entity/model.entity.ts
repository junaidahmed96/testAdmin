import { CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

export default abstract class Model extends BaseEntity {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
