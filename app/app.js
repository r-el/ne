const express = require('express')
var path = require('path');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.send(index.html)
})

app.listen(port, () => {
    console.log(`The app app listening at http://localhost:${port}`)
})