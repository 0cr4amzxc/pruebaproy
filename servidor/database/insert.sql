--? Usuarios
INSERT INTO `usuario` (`idUsuario`, `nom_usu`, `pat_usu`, `mat_usu`, `ci_usu`, `alias_usu`, `password_usu`, `correo_usu`, `genero_usu`)
VALUES
    (300, 'John', 'Doe', 'Smith', '123456789', 'johndoe', 'password123', 'john@example.com', 'Male'),
    (301, 'Jane', 'Doe', 'Johnson', '987654321', 'janedoe', 'pass4321', 'jane@example.com', 'Female'),
    (302, 'Michael', 'Brown', 'Johnson', '567891234', 'mikebrown', 'mikepass', 'michael@example.com', 'Male');

-- users admin
INSERT INTO `usuario` (`idUsuario`, `nom_usu`, `pat_usu`, `mat_usu`, `ci_usu`, `alias_usu`, `password_usu`, `correo_usu`, `genero_usu`)
VALUES
    (303, 'Maria', 'Garcia', 'Lopez', '987654321', 'mariagarcia', 'password123', 'maria@example.com', 'Female'),
    (304, 'David', 'Smith', 'Brown', '567891234', 'davidsmith', 'pass4321', 'david@example.com', 'Male'),
    (305, 'Laura', 'Johnson', 'Gomez', '123456789', 'laurajohnson', 'laurapass', 'laura@example.com', 'Female');


-- ? Administradores
INSERT INTO `administrador` (`idAdmin`, `idUsuario`, `dir_adm`, `cargo_adm`)
VALUES
    (400, 303, 'Admin Address 1', 'Admin'),
    (401, 304, 'Admin Address 2', 'Admin'),
    (402, 305, 'Admin Address 3', 'Admin');

---? Evento
INSERT INTO evento (nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen) 
VALUES 
('Concierto de Rock', '18:00:00', '2023-10-15', '2023-10-15', 'Presencial', 'https://ejemplo.com/concierto-rock', 'Música', 'Concierto de rock en vivo', 'https://cdn.euroinnova.edu.es/img/subidasEditor/copia%20de%20sin%20t%C3%ADtulo%20(41)-1632683109.webp'),
('Seminario de Tecnología', '14:00:00', '2023-10-20', '2023-10-22', 'Virtual', 'https://ejemplo.com/seminario-tecnologia', 'Tecnología', 'Seminario sobre últimas tendencias tecnológicas', 'https://cevents.es/wp-content/uploads/2022/07/organizar-simposio.jpg'),
('Exposición de Arte', '12:00:00', '2023-11-05', '2023-11-10', 'Presencial', 'https://ejemplo.com/exposicion-arte', 'Arte', 'Exposición de obras de artistas locales', 'https://eventoseidh.com/wp-content/uploads/2021/01/image-1.png'),
('Curso de Cocina', '16:30:00', '2023-11-15', '2023-11-18', 'Presencial', 'https://ejemplo.com/curso-cocina', 'Cocina', 'Curso de cocina con chefs profesionales', 'https://definicion.de/wp-content/uploads/2014/09/simposio-1.jpg');


--* Material
--* Norma

-- Insert into 'material' table with specified idMaterial and unique URLs
INSERT INTO `material` (`idMaterial`, `url`)
VALUES
    (101, 'https://www.defensoria.gob.bo/uploads/files/cartilla-ley-348-en-43-preguntas-y-respuestas.pdf'),
    (102, 'http://example.com/material_norma_2'),
    (103, 'http://example.com/material_norma_3');

-- Now, insert into 'norma' table using the specified idMaterial values
INSERT INTO `norma` (`idMaterial`, `vigencia_nor`, `fuente_nor`, `desc_nor`)
VALUES
    (101, '2023-10-10', 'Source Norma 1', 'Norma 1 Description'),
    (102, '2023-10-15', 'Source Norma 2', 'Norma 2 Description'),
    (103, '2023-10-20', 'Source Norma 3', 'Norma 3 Description');

--* Educativo
-- Insert into 'material' table with specified idMaterial and unique URLs for educativo
INSERT INTO `material` (`idMaterial`, `url`)
VALUES
    (201, 'https://www.defensoria.gob.bo/uploads/files/cartilla-ley-348-en-43-preguntas-y-respuestas.pdf'),
    (202, 'http://example.com/material_educativo_2'),
    (203, 'http://example.com/material_educativo_3');

-- Now, insert into 'educativo' table using the specified idMaterial values
INSERT INTO `educativo` (`idMaterial`, `desc_edu`)
VALUES
    (201, 'Educational Material 1 Description'),
    (202, 'Educational Material 2 Description'),
    (203, 'Educational Material 3 Description');

--? Centros de ayuda
INSERT INTO `centroAyuda` (`idCentro`, `foto_cna`, `nomb_cna`, `categ_cna`, `dir_cna`, `desc_cna`)
VALUES
    (500, 'foto1.jpg', 'Centro Ayuda 1', 'Categoría 1', 'Dirección 1', 'Descripción 1'),
    (501, 'foto2.jpg', 'Centro Ayuda 2', 'Categoría 2', 'Dirección 2', 'Descripción 2'),
    (502, 'foto3.jpg', 'Centro Ayuda 3', 'Categoría 3', 'Dirección 3', 'Descripción 3');

--? Denuncias
-- Insert individual records into 'denuncia' table with idDenuncia starting from 600
INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (600, 303, 'Fraude', '2023-10-10 12:00:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (601, 304, 'Acoso', '2023-10-11 14:30:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (602, 305, 'Robo', '2023-10-12 09:45:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (603, 303, 'Violencia', '2023-10-13 16:20:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (604, 304, 'Difamación', '2023-10-14 11:10:00');
