/* const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT N.id_nota, E.nombre AS nombre_estudiante, E.apellido AS apellido_estudiante, C.nombre AS curso, N.nota, N.fecha_evaluacion
        FROM Notas N
        JOIN Estudiantes E ON N.id_estudiante = E.id_estudiante
        JOIN Cursos C ON N.id_curso = C.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getCursos = (req, res) => {
    const query = 'SELECT DISTINCT nombre FROM Cursos';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = { getAll, getCursos };
 */

const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT N.id_nota, E.nombre AS nombre_estudiante, E.apellido AS apellido_estudiante, C.nombre AS curso, N.nota, N.fecha_evaluacion
        FROM Notas N
        JOIN Estudiantes E ON N.id_estudiante = E.id_estudiante
        JOIN Cursos C ON N.id_curso = C.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getById = (req, res) => {
    const { id } = req.params;
    const query = `
        SELECT N.id_nota, E.id_estudiante, C.id_curso, N.nota, N.fecha_evaluacion
        FROM Notas N
        JOIN Estudiantes E ON N.id_estudiante = E.id_estudiante
        JOIN Cursos C ON N.id_curso = C.id_curso
        WHERE N.id_nota = ?;
    `;

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Nota not found' });
        }
        res.json(results[0]);
    });
};

const getCursos = (req, res) => {
    const query = 'SELECT DISTINCT nombre FROM Cursos';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const create = (req, res) => {
    const { id_estudiante, id_curso, nota, fecha_evaluacion } = req.body;
    const query = 'INSERT INTO Notas (id_estudiante, id_curso, nota, fecha_evaluacion) VALUES (?, ?, ?, ?)';
    connection.query(query, [id_estudiante, id_curso, nota, fecha_evaluacion], (err, results) => {
        if (err) {
            console.error('Error creating nota:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Nota added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const notaId = req.params.id;
    const { id_estudiante, id_curso, nota, fecha_evaluacion } = req.body;
    const query = 'UPDATE Notas SET id_estudiante = ?, id_curso = ?, nota = ?, fecha_evaluacion = ? WHERE id_nota = ?';
    connection.query(query, [id_estudiante, id_curso, nota, fecha_evaluacion, notaId], (err, results) => {
        if (err) {
            console.error('Error updating nota:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Nota not found' });
        }
        res.json({ message: 'Nota updated successfully' });
    });
};

const deleteNota = (req, res) => {
    const notaId = req.params.id;
    const query = 'DELETE FROM Notas WHERE id_nota = ?';
    connection.query(query, [notaId], (err, results) => {
        if (err) {
            console.error('Error deleting nota:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Nota not found' });
        }
        res.json({ message: 'Nota deleted successfully' });
    });
};

module.exports = { getAll, getById, getCursos, create, update, delete: deleteNota };

