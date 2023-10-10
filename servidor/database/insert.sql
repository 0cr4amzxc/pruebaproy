---Evento
INSERT INTO evento (nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen) 
VALUES 
('Concierto de Rock', '18:00:00', '2023-10-15', '2023-10-15', 'Presencial', 'https://ejemplo.com/concierto-rock', 'Música', 'Concierto de rock en vivo', 'https://cdn.euroinnova.edu.es/img/subidasEditor/copia%20de%20sin%20t%C3%ADtulo%20(41)-1632683109.webp'),
('Seminario de Tecnología', '14:00:00', '2023-10-20', '2023-10-22', 'Virtual', 'https://ejemplo.com/seminario-tecnologia', 'Tecnología', 'Seminario sobre últimas tendencias tecnológicas', 'https://cevents.es/wp-content/uploads/2022/07/organizar-simposio.jpg'),
('Exposición de Arte', '12:00:00', '2023-11-05', '2023-11-10', 'Presencial', 'https://ejemplo.com/exposicion-arte', 'Arte', 'Exposición de obras de artistas locales', 'https://eventoseidh.com/wp-content/uploads/2021/01/image-1.png'),
('Curso de Cocina', '16:30:00', '2023-11-15', '2023-11-18', 'Presencial', 'https://ejemplo.com/curso-cocina', 'Cocina', 'Curso de cocina con chefs profesionales', 'https://definicion.de/wp-content/uploads/2014/09/simposio-1.jpg');


--* Material
--* Educativo

-- Insert into 'material' table with specified idMaterial and unique URLs
INSERT INTO `material` (`idMaterial`, `url`)
VALUES
    (101, 'http://example.com/material_norma_1'),
    (102, 'http://example.com/material_norma_2'),
    (103, 'http://example.com/material_norma_3');

-- Now, insert into 'norma' table using the specified idMaterial values
INSERT INTO `norma` (`idMaterial`, `vigencia_nor`, `fuente_nor`, `desc_nor`)
VALUES
    (101, '2023-10-10', 'Source Norma 1', 'Norma 1 Description'),
    (102, '2023-10-15', 'Source Norma 2', 'Norma 2 Description'),
    (103, '2023-10-20', 'Source Norma 3', 'Norma 3 Description');

--* Norma
-- Insert into 'material' table with specified idMaterial and unique URLs for educativo
INSERT INTO `material` (`idMaterial`, `url`)
VALUES
    (201, 'http://example.com/material_educativo_1'),
    (202, 'http://example.com/material_educativo_2'),
    (203, 'http://example.com/material_educativo_3');

-- Now, insert into 'educativo' table using the specified idMaterial values
INSERT INTO `educativo` (`idMaterial`, `desc_edu`)
VALUES
    (201, 'Educational Material 1 Description'),
    (202, 'Educational Material 2 Description'),
    (203, 'Educational Material 3 Description');


