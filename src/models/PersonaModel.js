const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Persona = sequelize.define('Persona', {
    PersonaId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    DepartamentoId: { type: DataTypes.INTEGER, allowNull: false },
    Nombre: { type: DataTypes.STRING, allowNull: false },
    Apellido: { type: DataTypes.STRING, allowNull: false },
    Estado: { type: DataTypes.BOOLEAN, allowNull: false }
}, { tableName: 'Persona', timestamps: false });

module.exports = Persona;