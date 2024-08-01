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

module.exports = { getAll };
