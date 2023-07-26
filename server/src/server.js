const express = require("express")
const app = express()

app.get('/', (req, res) =>{
    res.json({text: 'Its working'})
})

app.listen(3030, () => {console.log('App is running on port 3030')})