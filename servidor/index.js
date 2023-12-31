import app from "./app.js";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import eventoRoutes from "./routes/evento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import adminRoutes from "./routes/administrador.routes.js";
import normaRoutes from "./routes/norma.routes.js";
import educativoRoutes from "./routes/educativo.routes.js";
import centroRoutes from "./routes/centroAyuda.routes.js";
import denuncia from "./routes/denuncia.routes.js"
import prueba from "./routes/prueba.routes.js"
import testigo from "./routes/testigo.routes.js"
import den_test from "./routes/den_testigo.routes.js"
import victima from "./routes/victima.routes.js"

import loginUser from "./routes/auth.routes.js"
import session from 'express-session';
import authRoutes from "./routes/auth.routes.js";


app.use(
    session({
      secret: 'tu_secreto', // Cambiar por cadena segura xd
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: "auto"
      }
    })
  );

app.listen(PORT);
app.use(indexRoutes);
app.use(eventoRoutes);
app.use(usuarioRoutes);
app.use(adminRoutes);
app.use(normaRoutes);
app.use(educativoRoutes);
app.use(loginUser);
app.use(authRoutes);
app.use(centroRoutes);
app.use(denuncia);
app.use(prueba);
app.use(testigo);
app.use(den_test);
app.use(victima);


console.log(`Server is running in port ${PORT}`);