const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
    .then(data => {
        console.log(`Connected to: ${data.connection.name} at port: ${data.connection.port}`);
    })
}
module.exports = connectDatabase