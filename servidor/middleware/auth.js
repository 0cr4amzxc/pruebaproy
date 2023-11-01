import jwt from "jsonwebtoken";

export const verifyToken = async(req, res, next) =>{
    const token = req.headers["x-access-token"];
    console.log(token);

    if(!token) return res.status(403).json({message: "No token"})

    const decoded = jwt.verify(token, "secret_key")

    console.log(decoded)

    next();
}

// En "../middleware/auth.js"
export const verificarSesionActiva = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: 'Por favor, inicie sesión en su cuenta' });
    }
    // Si hay una sesión activa, continúa con la solicitud
    next();
};

// Middleware para verificar si el usuario es administrador
export const verificarAdmin = (req, res, next) => {
    // Verificar si el usuario ha iniciado sesión y tiene el rol de "admin"
    //console.log(`este es rol${req.session.role}`)
    //console.log(`este es req session ${req.session}`)
    //console.log(`este es rol ${req.session.role}`)
    if (req.session.role === 'admin') {
        // Si el usuario es administrador, continúa con la solicitud
        next();
    } else {
        // Si el usuario no es administrador, devuelve un mensaje de acceso denegado
        //de aqui mandar  aun apagina de verficacion
        res.status(403).json({ message: 'Acceso denegado: se requieren permisos de administrador' });
    }
};
