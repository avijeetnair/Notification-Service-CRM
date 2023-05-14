require("./crons/cron")
const dbConfig = require('./configs/db.config')
const mongoose = require('mongoose')
const express = require('express')

const app = express()
app.use(express.json())

mongoose.connect(dbConfig.DB_URL)
.then(function(){
   console.log('Connected to Mongo DB!')
})
.catch(function (err){
   console.log("Error: ", err.message)
})

require("./routes/ticketNotification.route")(app)

app.listen(3030, () => {
    console.log("Application started on the port num 3030")
})
//second , minute ,hour ,day of month, month, day of week
