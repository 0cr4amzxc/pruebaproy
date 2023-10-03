-- Insertar administradores
INSERT INTO administrador (idUsuario, dir_adm, cargo_adm)
VALUES (1, 'Calle 123, Ciudad', 'Director de Eventos');

INSERT INTO administrador (idUsuario, dir_adm, cargo_adm)
VALUES (2, 'Avenida Principal, Pueblo', 'Coordinador de Eventos');

-- Insertar usuarios
INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Juan', 'Perez', 'Lopez', '1234567', 'juanito123', 'password123', 'juan@example.com', 'Masculino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Maria', 'Garcia', 'Lopez', '7654321', 'mariag', 'mypass123', 'maria@example.com', 'Femenino');

--evento


INSERT INTO evento (idAdmin, nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, dir_imagen)
VALUES (3, 'Evento 1', '10:00:00', '2023-10-01', '2023-10-03', 'Presencial', 'https://ejemplo.com/evento1', 'Conferencia', 'imagenes/evento1.jpg');

INSERT INTO evento (idAdmin, nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, dir_imagen)
VALUES (4, 'Evento 2', '14:00:00', '2023-10-05', '2023-10-06', 'Virtual', 'https://ejemplo.com/evento2', 'Taller', 'imagenes/evento2.jpg');

INSERT INTO evento (idAdmin, nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, dir_imagen)
VALUES (3, 'Evento 3', '09:30:00', '2023-10-08', '2023-10-08', 'Presencial', 'https://ejemplo.com/evento3', 'Charla', 'imagenes/evento3.jpg');
