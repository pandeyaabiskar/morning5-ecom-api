const mongoose = require('mongoose')

function connectDatabase() {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://localhost:27017/ecommerce", (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("Database connected successfully!")
    })
}

module.exports = connectDatabase