import app from "./app.js";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import eventoRoutes from "./routes/evento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import adminRoutes from "./routes/administrador.routes.js";
import normaRoutes from "./routes/norma.routes.js";
import educativoRoutes from "./routes/educativo.routes.js";

app.listen(PORT);
app.use(indexRoutes);
app.use(eventoRoutes);
app.use(usuarioRoutes);
app.use(adminRoutes);
app.use(normaRoutes);
app.use(educativoRoutes);

console.log(`Server is running in port ${PORT}`);
