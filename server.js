const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

dotenv.config({path: "config/.env"})

connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`connected to server at ${process.env.PORT}`);
})