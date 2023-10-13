-- -----------------------------------------------------
-- Table  `cuestionario`
-- -----------------------------------------------------
INSERT INTO cuestionario (nombre, tipo) VALUES ('Cuestionario 1', 'Encuesta');

INSERT INTO cuestionario (nombre, tipo) VALUES ('Cuestionario 2', 'Evaluacion');

INSERT INTO cuestionario (nombre, tipo) VALUES ('Cuestionario 3', 'Evaluacion');


-- -----------------------------------------------------
-- Table  `usuario`
-- -----------------------------------------------------
INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Juan', 'Pérez', 'López', '123456789', 'juanito123', 'contraseña123', 'juan@example.com', 'Masculino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('María', 'Gómez', 'Rodríguez', '987654321', 'maria89', 'claveSegura', 'maria@example.com', 'Femenino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Carlos', 'Sánchez', 'Martínez', '555555555', 'carlos12', 'miPassword', 'carlos@example.com', 'Masculino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Luis', 'González', 'Pérez', '111223344', 'luisito', 'contraseña456', 'luis@example.com', 'Masculino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Ana', 'Martínez', 'Gómez', '555667788', 'ana88', 'claveSegura123', 'ana@example.com', 'Femenino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Pedro', 'Sánchez', 'López', '999000111', 'pedrito', 'miPassword567', 'pedro@example.com', 'Masculino');

INSERT INTO usuario (nom_usu, pat_usu, mat_usu, ci_usu, alias_usu, password_usu, correo_usu, genero_usu)
VALUES ('Elena', 'García', 'Rodríguez', '777888999', 'elena22', 'contraseña1234', 'elena@example.com', 'Femenino');

-- -----------------------------------------------------
-- Table  `administrador`
-- -----------------------------------------------------

INSERT INTO administrador (idUsuario, dir_adm, cargo_adm)
VALUES (1, 'Calle Principal 123', 'Administrador');

INSERT INTO administrador (idUsuario, dir_adm, cargo_adm)
VALUES (2, 'Avenida Central 456', 'Supervisor');

INSERT INTO administrador (idUsuario, dir_adm, cargo_adm)
VALUES (3, 'Plaza Mayor 789', 'Coordinador');

-- -----------------------------------------------------
-- Table  `contactoEmergencia`
-- -----------------------------------------------------

INSERT INTO contactoEmergencia (nom_cont, tel_cont)
VALUES ('Juan Pérez', '62781651');

INSERT INTO contactoEmergencia (nom_cont, tel_cont)
VALUES ('María González', '72134658');

INSERT INTO contactoEmergencia (nom_cont, tel_cont)
VALUES ('Pedro Sánchez', '69792345');


-- -----------------------------------------------------
-- Table  `Usu_tiene_contEme`
-- -----------------------------------------------------

INSERT INTO Usu_tiene_contEme (idUsuario, idContacto)
VALUES (4, 1);

INSERT INTO Usu_tiene_contEme (idUsuario, idContacto)
VALUES (5, 2);

INSERT INTO Usu_tiene_contEme (idUsuario, idContacto)
VALUES (6, 3);


-- -----------------------------------------------------
-- Table  `Usu_notifica_contEme`
-- -----------------------------------------------------

INSERT INTO Usu_notifica_contEme (idUsuario, idContacto, ubicacion, fecha)
VALUES (4, 1, 'La Paz, Calle Bueno', NOW()); 

INSERT INTO Usu_notifica_contEme (idUsuario, idContacto, ubicacion, fecha)
VALUES (5, 2, 'El Alto, Ceja', NOW()); 

INSERT INTO Usu_notifica_contEme (idUsuario, idContacto, ubicacion, fecha)
VALUES (6, 3, 'La Paz, Av. Arce', NOW()); 


-- -----------------------------------------------------
-- Table  `evento`
-- -----------------------------------------------------

INSERT INTO evento (idAdmin, nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen)
VALUES (1, 'Conferencia sobre Violencia Doméstica', '15:00:00', '2023-10-15', '2023-10-15', 'Presencial', 'https://ejemplo.com/evento1', 'Violencia Doméstica', 'Conferencia informativa sobre la prevención de la violencia doméstica', 'imagen1.jpg');

INSERT INTO evento (idAdmin, nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen)
VALUES (2, 'Charla de Concientización sobre el Bullying', '18:30:00', '2023-11-05', '2023-11-05', 'Virtual', 'https://ejemplo.com/evento2', 'Bullying', 'Charla para concienciar sobre el acoso escolar (bullying)', 'imagen2.jpg');

INSERT INTO evento (idAdmin, nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen)
VALUES (3, 'Taller de Empoderamiento Femenino', '14:00:00', '2023-12-10', '2023-12-10', 'Presencial', 'https://ejemplo.com/evento3', 'Violencia de Género', 'Taller para empoderar a mujeres y prevenir la violencia de género', 'imagen3.jpg');

-- -----------------------------------------------------
-- Table  `material`
-- -----------------------------------------------------

INSERT INTO material (idAdmin, url)
VALUES (1, 'https://ejemplo.com/material1.pdf');

INSERT INTO material (idAdmin, url)
VALUES (2, 'https://ejemplo.com/material2.pdf');

INSERT INTO material (idAdmin, url)
VALUES (3, 'https://ejemplo.com/material3.pdf');

-- -----------------------------------------------------
-- Table  `norma`
-- -----------------------------------------------------

INSERT INTO norma (idMaterial, idAdmin, vigencia_nor, fuente_nor, desc_nor)
VALUES (1, 1, '2023-01-01', 'Ley 348', 'Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia');

INSERT INTO norma (idMaterial, idAdmin, vigencia_nor, fuente_nor, desc_nor)
VALUES (2, 2, '2023-02-15', 'Ley 263', 'Ley contra el Acoso y Violencia Escolar (bullying)');

INSERT INTO norma (idMaterial, idAdmin, vigencia_nor, fuente_nor, desc_nor)
VALUES (3, 3, '2023-03-10', 'Ley 348', 'Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia');


-- -----------------------------------------------------
-- Table  `educativo`
-- -----------------------------------------------------

INSERT INTO educativo (idMaterial, idAdmin, desc_edu)
VALUES (4, 1, 'Folleto informativo sobre la prevención de la violencia doméstica');

INSERT INTO educativo (idMaterial, idAdmin, desc_edu)
VALUES (5, 2, 'Presentación en PowerPoint sobre la prevención del bullying en las escuelas');

INSERT INTO educativo (idMaterial, idAdmin, desc_edu)
VALUES (6, 3, 'Video educativo sobre la violencia de género y sus consecuencias');


-- -----------------------------------------------------
-- Table  `centroAyuda`
-- -----------------------------------------------------

-- aun se debe modificar

INSERT INTO centroAyuda (idAdmin, foto_cna, nomb_cna, categ_cna, dir_cna, desc_cna)
VALUES (1, 'https://ejemplo.com/centro1.jpg', 'Centro de Ayuda 1', 'Apoyo a Víctimas', 'Calle 123, Ciudad', 'Ofrecemos apoyo y asesoramiento a víctimas de violencia.');

INSERT INTO centroAyuda (idAdmin, foto_cna, nomb_cna, categ_cna, dir_cna, desc_cna)
VALUES (2, 'https://ejemplo.com/centro2.jpg', 'Centro de Ayuda 2', 'Concienciación', 'Avenida 456, Pueblo', 'Realizamos campañas de concienciación y educación sobre la violencia.');

INSERT INTO centroAyuda (idAdmin, foto_cna, nomb_cna, categ_cna, dir_cna, desc_cna)
VALUES (3, 'https://ejemplo.com/centro3.jpg', 'Centro de Ayuda 3', 'Prevención de Género', 'Plaza 789, Villa', 'Trabajamos en la prevención de la violencia de género.');

-- -----------------------------------------------------
-- Table  `denuncia`
-- -----------------------------------------------------

INSERT INTO denuncia (idUsuario, tipo_den, fec_den)
VALUES (4, 'Violencia Doméstica', NOW());

INSERT INTO denuncia (idUsuario, tipo_den, fec_den)
VALUES (5, 'Acoso Escolar (Bullying)', NOW());

INSERT INTO denuncia (idUsuario, tipo_den, fec_den)
VALUES (6, 'Violencia de Género', NOW());

INSERT INTO denuncia (idUsuario, tipo_den, fec_den)
VALUES (7, 'Otro Tipo de Violencia', NOW());

-- -----------------------------------------------------
-- Table  `admin_rev_den`
-- -----------------------------------------------------

INSERT INTO admin_rev_den (idAdmin, idDenuncia, fec_ard)
VALUES (1, 1, NOW());

INSERT INTO admin_rev_den (idAdmin, idDenuncia, fec_ard)
VALUES (2, 2, NOW());

INSERT INTO admin_rev_den (idAdmin, idDenuncia, fec_ard)
VALUES (3, 3, NOW());

-- -----------------------------------------------------
-- Table  `victima`
-- -----------------------------------------------------

INSERT INTO victima (nom_vic, ci_vic, ranEdad_vic, genero_vic)
VALUES ('María Pérez', '123456789', '18-30', 'Femenino');

INSERT INTO victima (nom_vic, ci_vic, ranEdad_vic, genero_vic)
VALUES ('Juan López', '987654321', '31-50', 'Masculino');

INSERT INTO victima (nom_vic, ci_vic, ranEdad_vic, genero_vic)
VALUES ('Ana Gómez', '456789123', '18-30', 'Femenino');

-- -----------------------------------------------------
-- Table  `victima_den`
-- -----------------------------------------------------

INSERT INTO victima_den (idVictima, idDenuncia)
VALUES (1, 1);

INSERT INTO victima_den (idVictima, idDenuncia)
VALUES (2, 2)

INSERT INTO victima_den (idVictima, idDenuncia)
VALUES (3, 3);

-- -----------------------------------------------------
-- Table  `victima_cen`
-- -----------------------------------------------------

INSERT INTO victima_cen (idVictima, idCentro)
VALUES (1, 1)

INSERT INTO victima_cen (idVictima, idCentro)
VALUES (2, 2)

INSERT INTO victima_cen (idVictima, idCentro)
VALUES (3, 3)

-- -----------------------------------------------------
-- Table  `prueba`
-- -----------------------------------------------------

INSERT INTO prueba (idDenuncia, archivo_pru, des_pru, tipo_pru)
VALUES (1, 'imagen1.jpg', 'Fotografía de evidencia', 'Imagen');

INSERT INTO prueba (idDenuncia, archivo_pru, des_pru, tipo_pru)
VALUES (2, 'video1.mp4', 'Video de evidencia', 'Video');

INSERT INTO prueba (idDenuncia, archivo_pru, des_pru, tipo_pru)
VALUES (2, 'imagen2.jpg', 'Otra fotografía de evidencia', 'Imagen');

-- -----------------------------------------------------
-- Table  `testigo`
-- -----------------------------------------------------

INSERT INTO testigo (nom_tes, ci_tes, genero_tes)
VALUES ('Pedro Martínez', '234567890', 'Masculino');

INSERT INTO testigo (nom_tes, ci_tes, genero_tes)
VALUES ('Laura González', '345678901', 'Femenino');

INSERT INTO testigo (nom_tes, ci_tes, genero_tes)
VALUES ('Juan Pérez', '456789012', 'Masculino');

-- -----------------------------------------------------
-- Table  `den_testigo`
-- -----------------------------------------------------

INSERT INTO den_testigo (idTestigo, idDenuncia)
VALUES (1, 1);

INSERT INTO den_testigo (idTestigo, idDenuncia)
VALUES (2, 2);

INSERT INTO den_testigo (idTestigo, idDenuncia)
VALUES (3, 2);

-- -----------------------------------------------------
-- Table  `acusado`
-- -----------------------------------------------------

INSERT INTO acusado (nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_acu)
VALUES ('Carlos Rodríguez', '789012345', '31-50', 'Masculino', 'Calle 123, Ciudad', 'imagen1.jpg');

INSERT INTO acusado (nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_acu)
VALUES ('Ana López', '890123456', '18-30', 'Femenino', 'Avenida 456, Pueblo', 'imagen2.jpg');

INSERT INTO acusado (nom_acu, ci_acu, ranEdad_acu, genero_acu, dir_acu, foto_acu)
VALUES ('Pedro Gómez', '901234567', '51-70', 'Masculino', 'Plaza 789, Villa', 'imagen3.jpg');


-- -----------------------------------------------------
-- Table  `acusado_den`
-- -----------------------------------------------------

INSERT INTO acusado_den (idAcusado, idDenuncia)
VALUES (1, 1);

INSERT INTO acusado_den (idAcusado, idDenuncia)
VALUES (2, 2);

INSERT INTO acusado_den (idAcusado, idDenuncia)
VALUES (3, 2);
