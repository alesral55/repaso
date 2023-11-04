
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res ) => {
    res.render('home',{
        nombre: 'Antony Ralon',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res ) => {
    res.render('generic',{
        nombre: 'Antony Ralon',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res ) => {
    res.render('elements',{
        nombre: 'Antony Ralon',
        titulo: 'Curso de Node'
    })
})

app.get('/generic.html', (req, res ) => {
    res.sendFile(__dirname + '/public3/template/generic.html')
})

app.get('/elements.html', (req, res ) => {
    res.sendFile(__dirname + '/public3/template/elements.html')
})


app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Ejemplo app listen at http://localhost:${port}`)
})