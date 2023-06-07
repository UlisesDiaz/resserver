
const loginService = require('../services/LoginService');
const loginController ={
    async login(req, res) {
        const {email, password} = req.body;
        try {
            const login = await loginService.login(email, password);
            res.apiSuccess(login);
        } catch (error) {
            res.apiError(error, 'Error al hacer login.');
        }
        }  
}


module.exports = loginController;
