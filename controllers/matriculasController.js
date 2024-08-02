/* const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT 
            Matriculas.id_matricula,
            Estudiantes.nombre AS Nombre_Estudiante,
            Estudiantes.apellido AS Apellido_Estudiante,
            Cursos.nombre AS Nombre_Curso,
            Matriculas.fecha_matricula
        FROM Matriculas
        JOIN Estudiantes ON Estudiantes.id_estudiante = Matriculas.id_estudiante
        JOIN Cursos ON Cursos.id_curso = Matriculas.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getAllEstudiantes = (req, res) => {
    const query = 'SELECT id_estudiante, CONCAT(nombre, " ", apellido) AS nombre_completo FROM Estudiantes';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching estudiantes: ', err);
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
        SELECT 
            Matriculas.id_matricula,
            Matriculas.id_estudiante,
            Matriculas.id_curso,
            DATE_FORMAT(Matriculas.fecha_matricula, '%Y-%m-%d') as fecha_matricula
        FROM Matriculas
        WHERE Matriculas.id_matricula = ?;
    `;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching matricula: ', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matricula not found' });
        }
        res.json(results[0]);
    });
};

const create = (req, res) => {
    const { id_estudiante, id_curso, fecha_matricula } = req.body;
    const query = 'INSERT INTO Matriculas (id_estudiante, id_curso, fecha_matricula) VALUES (?, ?, ?)';
    connection.query(query, [id_estudiante, id_curso, fecha_matricula], (err, results) => {
        if (err) {
            console.error('Error creating matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { id_estudiante, id_curso, fecha_matricula } = req.body;
    const query = 'UPDATE Matriculas SET id_estudiante = ?, id_curso = ?, fecha_matricula = ? WHERE id_matricula = ?';
    connection.query(query, [id_estudiante, id_curso, fecha_matricula, id], (err, results) => {
        if (err) {
            console.error('Error updating matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula updated successfully' });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Matriculas WHERE id_matricula = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula deleted successfully' });
    });
};

module.exports = { getAll, getAllEstudiantes, getAllCursos, getById, create, update, remove }; */


/* const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT 
            Matriculas.id_matricula,
            Estudiantes.nombre AS Nombre_Estudiante,
            Estudiantes.apellido AS Apellido_Estudiante,
            Cursos.nombre AS Nombre_Curso,
            Matriculas.fecha_matricula
        FROM Matriculas
        JOIN Estudiantes ON Estudiantes.id_estudiante = Matriculas.id_estudiante
        JOIN Cursos ON Cursos.id_curso = Matriculas.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getAllEstudiantes = (req, res) => {
    const query = 'SELECT id_estudiante, CONCAT(nombre, " ", apellido) AS nombre_completo FROM Estudiantes';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching estudiantes: ', err);
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
        SELECT 
            Matriculas.id_matricula,
            Matriculas.id_estudiante,
            Matriculas.id_curso,
            DATE_FORMAT(Matriculas.fecha_matricula, '%Y-%m-%d') as fecha_matricula
        FROM Matriculas
        WHERE Matriculas.id_matricula = ?;
    `;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching matricula: ', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matricula not found' });
        }
        res.json(results[0]);
    });
};

const create = (req, res) => {
    const { id_estudiante, id_curso, fecha_matricula } = req.body;
    const query = 'INSERT INTO Matriculas (id_estudiante, id_curso, fecha_matricula) VALUES (?, ?, ?)';
    connection.query(query, [id_estudiante, id_curso, fecha_matricula], (err, results) => {
        if (err) {
            console.error('Error creating matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { id_estudiante, id_curso, fecha_matricula } = req.body;
    const query = 'UPDATE Matriculas SET id_estudiante = ?, id_curso = ?, fecha_matricula = ? WHERE id_matricula = ?';
    connection.query(query, [id_estudiante, id_curso, fecha_matricula, id], (err, results) => {
        if (err) {
            console.error('Error updating matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula updated successfully' });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Matriculas WHERE id_matricula = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula deleted successfully' });
    });
};

module.exports = { getAll, getAllEstudiantes, getAllCursos, getById, create, update, remove };
 */

const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT 
            Matriculas.id_matricula,
            Estudiantes.nombre AS Nombre_Estudiante,
            Estudiantes.apellido AS Apellido_Estudiante,
            Cursos.nombre AS Nombre_Curso,
            Matriculas.fecha_matricula
        FROM Matriculas
        JOIN Estudiantes ON Estudiantes.id_estudiante = Matriculas.id_estudiante
        JOIN Cursos ON Cursos.id_curso = Matriculas.id_curso;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getAllEstudiantes = (req, res) => {
    const query = 'SELECT id_estudiante, CONCAT(nombre, " ", apellido) AS nombre_completo FROM Estudiantes';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching estudiantes: ', err);
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
        SELECT 
            Matriculas.id_matricula,
            Matriculas.id_estudiante,
            Matriculas.id_curso,
            DATE_FORMAT(Matriculas.fecha_matricula, '%Y-%m-%d') as fecha_matricula
        FROM Matriculas
        WHERE Matriculas.id_matricula = ?;
    `;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching matricula: ', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matricula not found' });
        }
        res.json(results[0]);
    });
};

const create = (req, res) => {
    const { id_estudiante, id_curso, fecha_matricula } = req.body;
    const query = 'INSERT INTO Matriculas (id_estudiante, id_curso, fecha_matricula) VALUES (?, ?, ?)';
    connection.query(query, [id_estudiante, id_curso, fecha_matricula], (err, results) => {
        if (err) {
            console.error('Error creating matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { id_estudiante, id_curso, fecha_matricula } = req.body;
    const query = 'UPDATE Matriculas SET id_estudiante = ?, id_curso = ?, fecha_matricula = ? WHERE id_matricula = ?';
    connection.query(query, [id_estudiante, id_curso, fecha_matricula, id], (err, results) => {
        if (err) {
            console.error('Error updating matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula updated successfully' });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Matriculas WHERE id_matricula = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting matricula:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Matricula deleted successfully' });
    });
};

module.exports = { getAll, getAllEstudiantes, getAllCursos, getById, create, update, remove };
