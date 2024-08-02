// controllers/cursosController.js
const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT C.id_curso, C.nombre, C.descripcion, D.nombre AS nombre_departamento
        FROM Cursos C
        LEFT JOIN Departamentos D ON C.id_departamento = D.id_departamento;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getCourseNames = (req, res) => {
    const query = 'SELECT DISTINCT nombre FROM Cursos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const create = (req, res) => {
    const { nombre, descripcion, id_departamento } = req.body;
    const query = 'INSERT INTO Cursos (nombre, descripcion, id_departamento) VALUES (?, ?, ?)';
    connection.query(query, [nombre, descripcion, id_departamento], (err, results) => {
        if (err) {
            console.error('Error al crear curso:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Curso agregado exitosamente', id: results.insertId });
    });
};

const getById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Cursos WHERE id_curso = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener el curso:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
        res.json(results[0]);
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, id_departamento } = req.body;
    const query = 'UPDATE Cursos SET nombre = ?, descripcion = ?, id_departamento = ? WHERE id_curso = ?';
    connection.query(query, [nombre, descripcion, id_departamento, id], (err, results) => {
        if (err) {
            console.error('Error al actualizar curso:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Curso actualizado exitosamente' });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Cursos WHERE id_curso = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar curso:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Curso eliminado exitosamente' });
    });
};

module.exports = { getAll, getCourseNames, create, getById, update, remove };
