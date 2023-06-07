const { validationResult } = require('express-validator');
const validateRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.apiError(errors.array());
    }
    next();
};

module.exports = validateRules;