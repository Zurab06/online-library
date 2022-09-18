const mongoose = require("mongoose")
const express = require("express")


const app = express()
 app.use(express.json())

 app.use(require('./routes/books.route'))
 app.use(require('./routes/genres.route'))
 app.use(require('./routes/reviews.routes'))
 app.use(require('./routes/users.route'))


 mongoose.connect(
    "mongodb+srv://gaunt0066:Panzerkampf06@cluster0.6m4r7dq.mongodb.net/coffee?retryWrites=true&w=majority")

    app.listen(3000, ()=>{
        console.log("server has been started")
    })