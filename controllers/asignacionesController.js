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

module.exports = { getAll };
