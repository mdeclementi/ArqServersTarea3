const Users = require('../Models/User');
require('dotenv').config(); 

exports.postCreateUser = async (req, res, next) => {

    const { name, email, password, bio, active } = req.body;

    try {
        const newUSer = await new Users({
            name,
            email,
            password,
            bio,
            active
        });
        await newUSer.save();
        res.status(200).json({
            success: true,
            msg: "Actividad 3 - Ejercicio 1 - Recibe body JSON con los campos name, email, password y bio.Almacena el usuario en Base de Datos en memoria cifrando su contraseña.",
            data: newUSer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Actividad 3 - Ejercicio 1 - Devuelve HTTP 400 si hay errores en la validación del body de la petición contra el esquema definido.",
            data: error.message
        });
    }

};