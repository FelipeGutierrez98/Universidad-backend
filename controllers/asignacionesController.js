/* const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT A.id_asignacion, CONCAT(P.nombre, ' ', P.apellido) AS nombre_profesor, C.nombre AS nombre_curso
        FROM Asignaciones A
        JOIN Profesores P ON A.id_profesor = P.id_profesor
        JOIN Cursos C ON A.id_curso = C.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = { getAll }; */


const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT A.id_asignacion, CONCAT(P.nombre, ' ', P.apellido) AS nombre_profesor, C.nombre AS nombre_curso
        FROM Asignaciones A
        JOIN Profesores P ON A.id_profesor = P.id_profesor
        JOIN Cursos C ON A.id_curso = C.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const create = (req, res) => {
    const { id_profesor, id_curso } = req.body;
    const query = 'INSERT INTO Asignaciones (id_profesor, id_curso) VALUES (?, ?)';
    connection.query(query, [id_profesor, id_curso], (err, results) => {
        if (err) {
            console.error('Error creating asignacion:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Asignacion added successfully', id: results.insertId });
    });
};

const getAllProfesores = (req, res) => {
    const query = 'SELECT id_profesor, CONCAT(nombre, " ", apellido) AS nombre_completo FROM Profesores';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching profesores: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getAllCursos = (req, res) => {
    const query = 'SELECT id_curso, nombre FROM Cursos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching cursos: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getById = (req, res) => {
    const { id } = req.params;
    const query = `
        SELECT A.id_asignacion, A.id_profesor, A.id_curso, CONCAT(P.nombre, ' ', P.apellido) AS nombre_profesor, C.nombre AS nombre_curso
        FROM Asignaciones A
        JOIN Profesores P ON A.id_profesor = P.id_profesor
        JOIN Cursos C ON A.id_curso = C.id_curso
        WHERE A.id_asignacion = ?;
    `;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching asignacion: ', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Asignacion not found' });
        }
        res.json(results[0]);
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { id_profesor, id_curso } = req.body;
    const query = 'UPDATE Asignaciones SET id_profesor = ?, id_curso = ? WHERE id_asignacion = ?';
    connection.query(query, [id_profesor, id_curso, id], (err, results) => {
        if (err) {
            console.error('Error updating asignacion:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Asignacion updated successfully' });
    });
};

const deleteAsignacion = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Asignaciones WHERE id_asignacion = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting asignacion:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Asignacion deleted successfully' });
    });
};

module.exports = { getAll, create, getAllProfesores, getAllCursos, getById, update, delete: deleteAsignacion };
