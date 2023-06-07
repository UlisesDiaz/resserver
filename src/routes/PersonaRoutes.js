const express = require('express');
const personaController = require('../controllers/PersonaController');
const personaValidationRules = require('../middlewares/validation/personaValidationRules');
const validateRules = require('../middlewares/validation/validateMiddleware');
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Persona
 *   description: API de gestión de personas
 * /api/persona:
 *   get:
 *     summary: Obtener todas las personas
 *     description: Obtiene una lista de todas las personas registradas.
 *     responses:
 *       200:
 *         description: OK. Lista de personas obtenida correctamente.
 *   post:
 *     summary: Crear una nueva persona
 *     description: Crea una nueva persona con los datos proporcionados.
 *     requestBody:
 *       description: Datos de la persona a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       201:
 *         description: Persona creada correctamente.
 *       400:
 *         description: Error de validación. Verificar los datos enviados.
 */

/**
 * @swagger
 * /api/persona/{id}:
 *   get:
 *     summary: Obtener una persona por su ID
 *     description: Obtiene los detalles de una persona específica según su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la persona a obtener.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK. Detalles de la persona obtenidos correctamente.
 *       404:
 *         description: No se encontró la persona con el ID especificado.
 *   put:
 *     summary: Actualizar una persona existente
 *     description: Actualiza los datos de una persona existente según su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la persona a actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados de la persona.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       200:
 *         description: Persona actualizada correctamente.
 *       400:
 *         description: Error de validación. Verificar los datos enviados.
 *       404:
 *         description: No se encontró la persona con el ID especificado.
 *   delete:
 *     summary: Eliminar una persona existente
 *     description: Elimina una persona existente según su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la persona a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Persona eliminada correctamente.
 *       404:
 *         description: No se encontró la persona con el ID especificado.
 */

router.get('/', personaController.getAll);
router.get('/:id', personaController.getById);
router.post('/', personaValidationRules.create, validateRules, personaController.create);
router.put('/:id', personaValidationRules.update, validateRules, personaController.update);
router.delete('/:id', personaController.delete);

module.exports = router;
