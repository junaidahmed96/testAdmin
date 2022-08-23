import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserModel } from "./entity/User.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [UserModel],
    migrations: [],
    subscribers: [],
})
