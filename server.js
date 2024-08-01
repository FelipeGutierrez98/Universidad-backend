/* const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/estudiantes', require('./routes/estudiantes'));
app.use('/cursos', require('./routes/cursos'));
app.use('/departamentos', require('./routes/departamentos'));
app.use('/matriculas', require('./routes/matriculas'));
app.use('/asignaciones', require('./routes/asignaciones'));
app.use('/notas', require('./routes/notas'));
app.use('/profesores', require('./routes/profesores'));

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/estudiantes', require('./routes/estudiantes'));
app.use('/cursos', require('./routes/cursos'));
app.use('/departamentos', require('./routes/departamentos'));
app.use('/matriculas', require('./routes/matriculas'));
app.use('/asignaciones', require('./routes/asignaciones'));
app.use('/notas', require('./routes/notas'));
app.use('/profesores', require('./routes/profesores'));

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
