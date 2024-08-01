/* const db = require('../libs/db');

const getAll = (req, res) => {
    const query = 'SELECT * FROM profesores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getById = (req, res) => {
    const profesorId = req.params.id;
    const query = 'SELECT * FROM profesores WHERE id_profesor = ?';
    db.query(query, [profesorId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json(results[0]);
    });
};

const create = (req, res) => {
    const { nombre, apellido, email, especialidad } = req.body;
    const query = 'INSERT INTO profesores (nombre, apellido, email, especialidad) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, apellido, email, especialidad], (err, results) => {
        if (err) {
            console.error('Error creating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const profesorId = req.params.id;
    const { nombre, apellido, email, especialidad } = req.body;
    const query = 'UPDATE profesores SET nombre = ?, apellido = ?, email = ?, especialidad = ? WHERE id_profesor = ?';
    db.query(query, [nombre, apellido, email, especialidad, profesorId], (err, results) => {
        if (err) {
            console.error('Error updating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor updated successfully' });
    });
};

const deleteProfesor = (req, res) => {
    const profesorId = req.params.id;
    const query = 'DELETE FROM profesores WHERE id_profesor = ?';
    db.query(query, [profesorId], (err, results) => {
        if (err) {
            console.error('Error deleting profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor deleted successfully' });
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteProfesor
};
 */
/* 
const db = require('../libs/db');

const getAll = (req, res) => {
    const query = 'SELECT * FROM profesores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getById = (req, res) => {
    const profesorId = req.params.id;
    const query = 'SELECT * FROM profesores WHERE id_profesor = ?';
    db.query(query, [profesorId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json(results[0]);
    });
};

const create = (req, res) => {
    const { nombre, apellido, email, especialidad } = req.body;
    const query = 'INSERT INTO profesores (nombre, apellido, email, especialidad) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, apellido, email, especialidad], (err, results) => {
        if (err) {
            console.error('Error creating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const profesorId = req.params.id;
    const { nombre, apellido, email, especialidad } = req.body;
    const query = 'UPDATE profesores SET nombre = ?, apellido = ?, email = ?, especialidad = ? WHERE id_profesor = ?';
    db.query(query, [nombre, apellido, email, especialidad, profesorId], (err, results) => {
        if (err) {
            console.error('Error updating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor updated successfully' });
    });
};

const deleteProfesor = (req, res) => {
    const profesorId = req.params.id;
    const query = 'DELETE FROM profesores WHERE id_profesor = ?';
    db.query(query, [profesorId], (err, results) => {
        if (err) {
            console.error('Error deleting profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor deleted successfully' });
    });
};

const getEspecialidades = (req, res) => {
    const query = 'SELECT DISTINCT especialidad FROM profesores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteProfesor,
    getEspecialidades
};
 */

/* const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT P.id_profesor, P.nombre, P.apellido, P.email, E.especialidad, P.foto
        FROM Profesores P
        JOIN Especialidades E ON P.id_especialidad = E.id_especialidad;
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getEspecialidades = (req, res) => {
    const query = 'SELECT DISTINCT especialidad FROM Especialidades';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const create = (req, res) => {
    const { nombre, apellido, email, id_especialidad, foto } = req.body;
    const query = 'INSERT INTO Profesores (nombre, apellido, email, id_especialidad, foto) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, email, id_especialidad, foto], (err, results) => {
        if (err) {
            console.error('Error creating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const profesorId = req.params.id;
    const { nombre, apellido, email, id_especialidad, foto } = req.body;
    const query = 'UPDATE Profesores SET nombre = ?, apellido = ?, email = ?, id_especialidad = ?, foto = ? WHERE id_profesor = ?';
    connection.query(query, [nombre, apellido, email, id_especialidad, foto, profesorId], (err, results) => {
        if (err) {
            console.error('Error updating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor updated successfully' });
    });
};

const deleteProfesor = (req, res) => {
    const profesorId = req.params.id;
    const query = 'DELETE FROM Profesores WHERE id_profesor = ?';
    connection.query(query, [profesorId], (err, results) => {
        if (err) {
            console.error('Error deleting profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor deleted successfully' });
    });
};

module.exports = { getAll, getEspecialidades, create, update, delete: deleteProfesor }; */




/* const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT P.id_profesor, P.nombre, P.apellido, P.email, E.especialidad
        FROM Profesores P
        JOIN Especialidades E ON P.id_especialidad = E.id_especialidad;
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getEspecialidades = (req, res) => {
    const query = 'SELECT DISTINCT especialidad FROM Especialidades';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const create = (req, res) => {
    const { nombre, apellido, email, id_especialidad } = req.body;
    const query = 'INSERT INTO Profesores (nombre, apellido, email, id_especialidad) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, email, id_especialidad], (err, results) => {
        if (err) {
            console.error('Error creating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const profesorId = req.params.id;
    const { nombre, apellido, email, id_especialidad } = req.body;
    const query = 'UPDATE Profesores SET nombre = ?, apellido = ?, email = ?, id_especialidad = ? WHERE id_profesor = ?';
    connection.query(query, [nombre, apellido, email, id_especialidad, profesorId], (err, results) => {
        if (err) {
            console.error('Error updating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor updated successfully' });
    });
};

const deleteProfesor = (req, res) => {
    const profesorId = req.params.id;
    const query = 'DELETE FROM Profesores WHERE id_profesor = ?';
    connection.query(query, [profesorId], (err, results) => {
        if (err) {
            console.error('Error deleting profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json({ message: 'Profesor deleted successfully' });
    });
};

module.exports = { getAll, getEspecialidades, create, update, delete: deleteProfesor }; */


const db = require('../libs/db');

const getAll = (req, res) => {
    const query = 'SELECT * FROM Profesores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getDistinctEspecialidades = (req, res) => {
    const query = 'SELECT DISTINCT especialidad FROM Profesores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Profesores WHERE id_profesor = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Profesor not found' });
        }
        res.json(results[0]);
    });
};

const create = (req, res) => {
    const { nombre, apellido, email, especialidad } = req.body;
    const query = 'INSERT INTO Profesores (nombre, apellido, email, especialidad) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, apellido, email, especialidad], (err, results) => {
        if (err) {
            console.error('Error creating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor added successfully', id: results.insertId });
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, especialidad } = req.body;
    const query = 'UPDATE Profesores SET nombre = ?, apellido = ?, email = ?, especialidad = ? WHERE id_profesor = ?';
    db.query(query, [nombre, apellido, email, especialidad, id], (err, results) => {
        if (err) {
            console.error('Error updating profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor updated successfully' });
    });
};

const deleteProfesor = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Profesores WHERE id_profesor = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting profesor:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Profesor deleted successfully' });
    });
};

module.exports = { getAll, getDistinctEspecialidades, getById, create, update, delete: deleteProfesor };




