const express = require('express')
const bc = require('./controllers/books_controller')

const app = express()

app.use(express.json())

//Endpoints
app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

const PORT = 4000

app.listen(PORT, () => console.log(`Server blazin on ${PORT}`))