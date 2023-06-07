const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql'
});
sequelize.authenticate().then(() => {
    console.log('Conexión establecida correctamente.');
}).catch(err => {
    console.log('No se pudo conectar a la base de datos.', err);
});

module.exports = sequelize;