/* const connection = require('../libs/db');

const getAll = (req, res) => {
    connection.query('SELECT * FROM Departamentos', (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta: ', err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = { getAll };
 */


const db = require('../libs/db');

const getAll = (req, res) => {
    const query = 'SELECT * FROM departamentos';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getDistinctNombres = (req, res) => {
    const query = 'SELECT DISTINCT nombre FROM departamentos';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getDistinctFacultades = (req, res) => {
    const query = 'SELECT DISTINCT facultad FROM departamentos';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const create = (req, res) => {
    const { nombre, facultad } = req.body;
    const query = 'INSERT INTO departamentos (nombre, facultad) VALUES (?, ?)';
    db.query(query, [nombre, facultad], (err, results) => {
        if (err) {
            console.error('Error creating departamento:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Departamento added successfully', id: results.insertId });
    });
};

const getById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM departamentos WHERE id_departamento = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Departamento not found' });
        }
        res.json(results[0]);
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { nombre, facultad } = req.body;
    const query = 'UPDATE departamentos SET nombre = ?, facultad = ? WHERE id_departamento = ?';
    db.query(query, [nombre, facultad, id], (err, results) => {
        if (err) {
            console.error('Error updating departamento:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Departamento updated successfully' });
    });
};

const deleteDepartamento = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM departamentos WHERE id_departamento = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting departamento:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Departamento deleted successfully' });
    });
};

module.exports = {
    getAll,
    getDistinctNombres,
    getDistinctFacultades,
    create,
    getById,
    update,
    delete: deleteDepartamento
};
