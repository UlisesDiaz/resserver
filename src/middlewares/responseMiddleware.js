const responseMiddleware = (req, res, next) => {
    // Agregar una función para formatear la respuesta estándar
    res.apiSuccess = (data, message = 'OK') => {
        res.json({
            success: true,
            data,
            message,
        });
    };

    res.apiError = (error, message = 'Error') => {
        res.status(500).json({
            success: false,
            error,
            message,
        });
    };

    next();
};

module.exports = responseMiddleware;
