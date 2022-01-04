const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./database")

dotenv.config({path: "config/.env"})
const port = 3000 
connectDatabase()
const server = app.listen(port, () => {
    console.log(`connected to server at ${port}`);
})