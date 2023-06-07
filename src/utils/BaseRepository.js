class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    getAll() {
        return this.model.findAll();
    }

    getById(id) {
        return this.model.findByPk(id);
    }

    create(data) {
        return this.model.create(data);
    }

    update(id, data) {
        return this.model.update(data, {
            where: { PersonaId: id },
        });
    }

    delete(id) {
        return this.model.destroy({
            where: { id },
        });
    }
}

module.exports = BaseRepository;

