const { body } = require('express-validator');
const Type = {
    create: [
        body('DepartamentoId').notEmpty().isInt({ min: 1 }).withMessage('El DepartamentoId es requerido y debe ser un entero mayor a cero'),
        body('Nombre').notEmpty().withMessage('El Nombre es requerido'),
        body('Apellido').notEmpty().withMessage('El Apellido es requerido'),
    ],
    update: [
        body('DepartamentoId').notEmpty().isInt({ min: 1 }).withMessage('El DepartamentoId es requerido y debe ser un entero mayor a cero'),
        body('Nombre').notEmpty().withMessage('El Nombre es requerido'),
        body('Apellido').notEmpty().withMessage('El Apellido es requerido'),
    ]
};

module.exports = Type;