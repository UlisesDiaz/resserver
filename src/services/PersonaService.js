// services/personaService.js
const Persona = require('../models/PersonaModel');
const BaseRepository = require('../utils/BaseRepository');

class PersonaService extends BaseRepository {
    constructor() {
        super(Persona);
    }
}

module.exports = new PersonaService();
