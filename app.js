import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import hbs from 'hbs'
import dotenv from 'dotenv'
dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()
const port = process.env.PORT
const { log } = console


//Vista
//Contenido estatico
app.use(express.static('public'))
//Contenido dinamico
app.set('view engine', 'hbs') //*Motor render
hbs.registerPartials(path.join(__dirname,'views', 'partials'))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
//Controladors
app.get('/', (request, response) => {
    response.render('home',{
        Title: 'Curso de node',
        Name: 'Gustavo Martinez'
    })
})
app.get('/elements.html', (request, response) => {
    response.render('elements')
})

app.get('/generic.html', (request, response) => {
    response.render('generic')
})
app.get('/generic', (request, response) => {
    response.render('generic')
})

//Expresion regular '.' -> cualqiier valor, '*' -> se repite 0 o mas veces, '/ ... /' -> Se abre o cierra expresion
app.get(/.*/, (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/404.html'))
})

app.listen(port, () => {
    log('Escuchando puerto', port)
})