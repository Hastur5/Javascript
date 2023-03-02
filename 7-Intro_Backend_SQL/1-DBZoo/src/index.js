const express = require('express') // se manda a llamar express en node modules.
const app = express() // se inicializa express en app.

app.use(express.json()) // en la app lo que entra es un json y lo que sale es un json.
app.use(express.urlencoded({ extended: false })) // cuando manden a llamar mi url, se piden parámetros.

// Definir rutas.
app.use(require('./routes/zoo.routes'))

app.listen(3000)
console.log('Server listening on port 3000')
