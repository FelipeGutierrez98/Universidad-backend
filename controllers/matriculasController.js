const connection = require('../libs/db');

const getAll = (req, res) => {
    const query = `
        SELECT 
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

module.exports = { getAll };
