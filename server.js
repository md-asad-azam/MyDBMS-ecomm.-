const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

dotenv.config({path: "config/.env"})

connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`connected to server at http://localhost:${process.env.PORT}`);
})

// unhandledPromiseRejection
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err} \nClosed the server due to unhandledPromiseRejection`);

    server.close(()=>{
        process.exit(1)
    })
})
