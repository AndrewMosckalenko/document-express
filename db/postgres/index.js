import { DataSource } from "typeorm"

let pgPool

const createPgPool = () => {
    pgPool = new DataSource({
        type: "postgres",
        host: process.env.POSTGRES_DB_HOST,
        port: Number(process.env.POSTGRES_DB_PORT),
        username: process.env.POSTGRES_DB_USER,
        password: process.env.POSTGRES_DB_PASS,
        database: process.env.POSTGRES_DB_NAME,
        entities: ["src/entity/*.js"],
        logging: true,
        synchronize: true,
    })
    
    pgPool
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
        })
}

export  {
    pgPool,
    createPgPool,
}