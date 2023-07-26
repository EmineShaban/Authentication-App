const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/')
    .then(() => {
        console.log('DB Connected')
    })

mongoose.connection.on('error', (error) => {
    console.log('DB Error: ', error)
})


app.use(express.json());
app.use(cors())



app.get('/', (req, res) =>{
    res.json({text: 'Its working'})
})

app.use(routes)

app.listen(3030, () => {console.log('App is running on port 3030')})