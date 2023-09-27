import app from "./app.js";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import eventoRoutes from "./routes/evento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import adminRoutes from "./routes/administrador.routes.js"

app.listen(PORT);
app.use(indexRoutes);
app.use(eventoRoutes);
app.use(usuarioRoutes);
app.use(adminRoutes);

console.log(`Server is running in port ${PORT}`);
