
const personaService = require('../services/personaService');

const personaController = {
    async getAll(req, res) {
        try {
            const personas = await personaService.getAll();
            res.apiSuccess(personas);
        } catch (error) {
            console.log(error);
            res.apiError(error, 'Error al obtener las personas.');
        }
    },

    async getById(req, res) {
        const { id } = req.params;
        try {
            const persona = await personaService.getById(id);
            if (persona) {
                res.json(persona);
            } else {
                res.apiError(null, 'Persona no encontrada.');
            }
        } catch (error) {
            res.apiError(error, 'Error al obtener la persona.');
        }
    },

    async create(req, res) {
        console.log(req.body);
        try {
            const persona = await personaService.create(req.body);
            res.apiSuccess(persona);
        } catch (error) {
            res.apiError(error, 'Error al crear la persona.');
        }
    },

    async update(req, res) {
        const id = parseInt(req.params.id);
        try {
            const personaExistente = await personaService.getById(id);
            if (personaExistente) {
                const persona = await personaService.update(id, req.body);
                res.apiSuccess(req.body);
            } else {
                res.apiError(null, 'Persona no encontrada.');
            }
        } catch (error) {
            res.apiError(error, 'Error al actualizar la persona.');
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            const personaExistente = await personaService.getById(id);
            if (personaExistente) {
                await personaService.delete(id);
                res.apiSuccess(personas);
            } else {
                res.apiError(null, 'Persona no encontrada.');
            }
        } catch (error) {
            res.apiError(error, 'Error al eliminar la persona.');
        }
    },
    
};

module.exports = personaController;
