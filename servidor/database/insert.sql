-- * Usuarios
INSERT INTO `usuario` (`idUsuario`, `nom_usu`, `pat_usu`, `mat_usu`, `ci_usu`, `alias_usu`, `password_usu`, `correo_usu`, `genero_usu`, `rol`)
VALUES
    (300, 'Sofia', 'Gonzales', 'Ramirez', '985451', 'SogiGod', 'password123', 'sofigon89@gmail.com', 'Female', 'usuario'),
    (301, 'Mateo', 'Rodriguez', 'Gutierrez', '1056148', 'Mate_Rod', 'pass4321', 'mrodriguez22@hotmail.com', 'Male', 'usuario'),
    (302, 'Valentina', 'López', 'Herrera', '1248752', 'ValeLH', 'valery48742', 'vale.lopez23@yahoo.com', 'Female', 'usuario');

-- * Userios Admin
INSERT INTO `usuario` (`idUsuario`, `nom_usu`, `pat_usu`, `mat_usu`, `ci_usu`, `alias_usu`, `password_usu`, `correo_usu`, `genero_usu`, `rol`)
VALUES
    (303, 'Santiago', 'Alvarez', 'Miranda', '124547', 'SantiMir', 'SantiMirfoeven', 'santiago.am84@outlook.com', 'Male', 'admin'),
    (304, 'Camila', 'Acosta', 'Sanchez', '104872', 'CAmiAS', 'pass4321CAmiAS', 'cami.acosta12@gmail.com', 'Female', 'admin'),
    (305, 'Daniel', 'Navarro', 'Martínez', '9888241', 'DannyN', 'passDanny', 'dan.navarro78@live.com', 'Male', 'admin');


-- * Administradores
INSERT INTO `administrador` (`idAdmin`, `idUsuario`, `dir_adm`, `cargo_adm`)
VALUES
    (400, 303, 'Admin Address 1', 'Admin'),
    (401, 304, 'Admin Address 2', 'Admin'),
    (402, 305, 'Admin Address 3', 'Admin');

-- * Evento
INSERT INTO evento (nom_evento, hora_evento, fecini_evento, fecfin_evento, modalidad, link, tipo, descripcion, dir_imagen)
VALUES
('Jornadas por la Paz', '10:00:00', '2023-10-15', '2023-10-30', 'Virtual', 'www.jornadasporlapaz.com', 'Conferencia', 'Jornadas enfocadas en la concientización y prevención de la violencia, con paneles de expertos, talleres interactivos y debates abiertos sobre estrategias para promover la paz y erradicar la violencia en comunidades.', 'https://i.postimg.cc/XvNgXVks/evento1.jpg'),
('Marcha por la No Violencia', '15:00:00', '2023-12-10', '2023-12-10', 'Presencial', 'www.no_violent_comunication.org', 'Marcha', 'Una marcha pacífica para concienciar sobre la importancia de la no violencia, la igualdad y el respeto. Se llevará a cabo en el centro de la ciudad con participación de líderes comunitarios, organizaciones y ciudadanos comprometidos con esta causa.', 'https://i.postimg.cc/3xFBKymy/evento2.jpg'),
('Educar en Valores para Prevenir la Violencia', '18:30:00', '2023-12-05', '2023-12-10', 'Virtual', 'www.educarenvalores.com/conferencia', 'Conferencia', 'Experto en psicología y educación compartirá estrategias para enseñar valores desde la infancia y prevenir la violencia. La conferencia se centrará en cómo la educación puede ser clave para la construcción de sociedades más pacíficas y respetuosas.', 'https://i.postimg.cc/Bn0p95L9/evento3.jpg'),
('Taller de Autodefensa y Empoderamiento para Mujeres', '14:30:00', '2023-02-8', '2023-02-9', 'Presencial', 'www.autodefensaparamujeres.com', 'Taller', 'Dos días de entrenamiento físico y psicológico para mujeres, enfocados en técnicas de autodefensa, fortalecimiento emocional y empoderamiento, con el objetivo de combatir la violencia de género.', 'https://i.postimg.cc/4NtPS23Q/evento4.jpg');


-- * Material
-- * Norma
INSERT INTO `material` (`idMaterial`, `url`)
VALUES
    (101, 'https://oig.cepal.org/sites/default/files/2013_bol_ley348.pdf'),
    (102, 'https://tsj.bo/wp-content/uploads/2019/11/ley-054-de-proteccio%CC%81n-legal-de-nin%CC%83as-nin%CC%83os-y-adolescentes.pdf'),
    (103, 'https://tsj.bo/wp-content/uploads/2019/11/codigo-penal-y-procedimento-penal.pdf');

INSERT INTO `norma` (`idMaterial`, `vigencia_nor`, `fuente_nor`, `desc_nor`)
VALUES
    (101, '2050-01-01', 'https://oig.cepal.org/sites/default/files/2013_bol_ley348.pdf', 'El artículo 7 de esta ley establece las formas de violencia contra las mujeres, enumerando distintos tipos de violencia, como la violencia física, psicológica, sexual, patrimonial y simbólica. Define cada una de estas formas de violencia para proporcionar un marco legal amplio para la protección de las mujeres.'),
    (102, '2050-01-01', 'https://tsj.bo/wp-content/uploads/2019/11/ley-054-de-proteccio%CC%81n-legal-de-nin%CC%83as-nin%CC%83os-y-adolescentes.pdf', 'El artículo 271 del Código Penal Boliviano se refiere a la violencia familiar. Penaliza a aquellos que causen lesiones o maltrato físico o psicológico a un miembro de su familia, estableciendo sanciones para quienes incurran en este tipo de conducta.'),
    (103, '2050-01-01', 'https://tsj.bo/wp-content/uploads/2019/11/codigo-penal-y-procedimento-penal.pdf', 'El artículo 281 del Código Penal Boliviano se refiere al delito de violación. Establece sanciones para quienes cometan este acto, definiendo los elementos y circunstancias que constituyen este grave delito contra la integridad sexual de una persona.');

-- * Educativo
INSERT INTO `material` (`idMaterial`, `url`)
VALUES
    (201, 'https://redclade.org/wp-content/uploads/Violencia-de-g%C3%A9nero-en-las-escuelas-caminos-para-su-prevenci%C3%B3n-y-superaci%C3%B3n.pdf'),
    (202, 'http://www.cesip.org.pe/sites/default/files/files/Nota%20conceptual_Conferencia%20regional_TrazandoFuturos_0.pdf'),
    (203, 'https://dgetaycm.sep.gob.mx/storage/recursos/2022/08/XhufyScuF6-3_Violencia.pdf');

INSERT INTO `educativo` (`idMaterial`, `desc_edu`)
VALUES
    (201, 'Este recurso educativo enfoca la sensibilización y reflexión sobre la violencia de género en la educación secundaria. Su meta es generar conciencia y promover análisis reflexivos de este problema específico en el entorno educativo, contribuyendo a la comprensión y prevención de la violencia de género en ese contexto'),
    (202, 'En el contexto de la pandemia del COVID-19, la protección de los niños, niñas y adolescentes ante la violencia es crucial. Para poner fin a este preocupante fenómeno, es fundamental implementar estrategias integrales que aborden tanto la prevención como la respuesta. Esto implica fortalecer los servicios de apoyo a las víctimas, proporcionar orientación a las familias, educar sobre la resolución pacífica de conflictos y promover el acceso a recursos psicológicos y sociales.'),
    (203, 'Es un recurso que se centra en ofrecer orientación e información acerca del fenómeno de la violencia, brindando pautas educativas y recursos para abordar este problema. Este material tiene como propósito principal proporcionar estrategias educativas y herramientas de orientación para prevenir y afrontar situaciones de violencia en distintos contextos, contribuyendo así a la concienciación y la promoción de entornos más seguros y saludables.');


-- * Centros de ayuda
INSERT INTO `centroAyuda` (`idCentro`, `foto_cna`, `nomb_cna`, `categ_cna`, `dir_cna`, `desc_cna`)
VALUES
    (500, 'https://i.postimg.cc/k471K0P5/center1.jpg', 'Centro de Atención a Víctimas - Esperanza Renovada', 'Violencia', 'Calle Primavera #123, Colonia Flores, Ciudad Esperanza, La Paz', 'Es un centro que proporciona apoyo integral a personas que han sufrido violencia doméstica. Ofrecen asesoramiento legal, apoyo psicológico y refugio temporal para aquellas personas que requieren un ambiente seguro.'),
    (501, 'https://i.postimg.cc/7ZTWk1Nq/center2.jpg', 'Centro de Apoyo Comunitario - Unidos por la Paz', 'Juventud', 'Avenida Libertad #456, Barrio Solidaridad, Ciudad Unión, Potosi', 'Este centro se enfoca en actividades recreativas, educativas y de formación para jóvenes en riesgo de violencia y exclusión social. Ofrecen talleres, orientación académica y deportes para fomentar la integración y prevenir situaciones de conflicto.'),
    (502, 'https://i.postimg.cc/FKyCf9qq/center3.jpg', 'Instituto de Ayuda Psicológica - Ser Contigo', 'Salud', 'Carrera Paz #789, Urbanización Serenidad, Ciudad Armonía, La Paz', 'Brindamos asistencia psicológica especializada a individuos que enfrentan situaciones de estrés, ansiedad o han sido víctimas de violencia. Ofrecen terapia individual, grupal y familiar para promover la salud mental.'),
    (503, 'https://i.postimg.cc/25RX8qHh/center4.jpg', 'Refugio - Hogar Seguro', 'Refugio', 'Calle Esperanza #234, Colonia Libertad, Ciudad Refugio, El Alto', 'Es un refugio que acoge a personas en situación de riesgo, incluyendo mujeres y niños que han sufrido violencia doméstica. Proporcionan refugio, alimentación, asistencia legal y apoyo psicológico.'),
    (504, 'https://i.postimg.cc/3JNqLQ44/center5.jpg', 'Centro de Orientación Legal - Derechos Claros', 'Legal', 'Avenida Justicia #567, Barrio Legalidad, Ciudad Derechos, Cochabamba', 'Este centro ofrece asesoramiento legal gratuito a personas que necesitan orientación sobre sus derechos, particularmente en situaciones de violencia, discriminación o vulneración de derechos humanos. Cuentan con abogados especializados en diferentes áreas legales.');

-- * Denuncias
INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (600, 301, 'Fraude', '2023-10-10 12:00:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (601, 301, 'Acoso', '2023-10-11 14:30:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (602, 302, 'Robo', '2023-10-12 09:45:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (603, 303, 'Violencia', '2023-10-13 16:20:00');

INSERT INTO `denuncia` (`idDenuncia`, `idUsuario`, `tipo_den`, `fec_den`)
VALUES (604, 304, 'Difamación', '2023-10-14 11:10:00');
