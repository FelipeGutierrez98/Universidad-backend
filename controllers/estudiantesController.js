/* 
const db = require('../libs/db');

const getAll = (req, res) => {
    const query = 'SELECT * FROM estudiantes';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getById = (req, res) => {
    const studentId = req.params.id;
    const query = 'SELECT * FROM estudiantes WHERE id_estudiante = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(results[0]);
    });
};

const update = (req, res) => {
    const studentId = req.params.id;
    let { nombre, apellido, email, fecha_nacimiento, foto } = req.body;
    console.log('Received update request:', req.body);

    if (fecha_nacimiento) {
        fecha_nacimiento = new Date(fecha_nacimiento).toISOString().split('T')[0];
    }

    const query = 'UPDATE estudiantes SET nombre = ?, apellido = ?, email = ?, fecha_nacimiento = ?, foto = ? WHERE id_estudiante = ?';
    db.query(query, [nombre, apellido, email, fecha_nacimiento, foto || '', studentId], (err, results) => {
        if (err) {
            console.error('Error updating student:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            console.error('Student not found:', studentId);
            return res.status(404).json({ error: 'Student not found' });
        }
        console.log('Student updated successfully:', results);
        res.json({ message: 'Student updated successfully' });
    });
};

const deleteStudent = (req, res) => {
    const studentId = req.params.id;
    const query = 'DELETE FROM estudiantes WHERE id_estudiante = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error('Error deleting student:', err);
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            console.error('Student not found:', studentId);
            return res.status(404).json({ error: 'Student not found' });
        }
        console.log('Student deleted successfully:', results);
        res.json({ message: 'Student deleted successfully' });
    });
};


const create = (req, res) => {
    const { nombre, apellido, email, fecha_nacimiento, foto } = req.body;
    const query = 'INSERT INTO estudiantes (nombre, apellido, email, fecha_nacimiento, foto) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellido, email, fecha_nacimiento, foto], (err, results) => {
        if (err) {
            console.error('Error creating student:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Student created successfully', id: results.insertId });
    });
};

module.exports = {
    getAll,
    getById,
    update,
    delete: deleteStudent,
    create 
};
 */

const db = require('../libs/db');

// Obtener todos los estudiantes
const getEstudiantes = (req, res) => {
    db.query('SELECT * FROM Estudiantes', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Obtener un estudiante por ID
const getEstudianteById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Estudiantes WHERE id_estudiante = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

// Crear un nuevo estudiante
const createEstudiante = (req, res) => {
    const { nombre, apellido, email, fecha_nacimiento, foto } = req.body;
    db.query('INSERT INTO Estudiantes (nombre, apellido, email, fecha_nacimiento, foto) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, email, fecha_nacimiento, foto], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, nombre, apellido, email, fecha_nacimiento, foto });
    });
};

// Actualizar un estudiante
const updateEstudiante = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, fecha_nacimiento, foto } = req.body;
    db.query('UPDATE Estudiantes SET nombre = ?, apellido = ?, email = ?, fecha_nacimiento = ?, foto = ? WHERE id_estudiante = ?', [nombre, apellido, email, fecha_nacimiento, foto, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id, nombre, apellido, email, fecha_nacimiento, foto });
    });
};

// Eliminar un estudiante
const deleteEstudiante = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Estudiantes WHERE id_estudiante = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).send();
    });
};

module.exports = {
    getEstudiantes,
    getEstudianteById,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante
};

