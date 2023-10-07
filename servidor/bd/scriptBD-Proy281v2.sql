-- -----------------------------------------------------
-- Table  `cuestionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cuestionario` (
  `idCuestionario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `tipo` VARCHAR(50) NULL,
  PRIMARY KEY (`idCuestionario`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nom_usu` VARCHAR(30) NULL,
  `pat_usu` VARCHAR(30) NULL,
  `mat_usu` VARCHAR(30) NULL,
  `ci_usu` VARCHAR(16) NULL,
  `alias_usu` VARCHAR(50) NULL,
  `password_usu` VARCHAR(250) NULL,
  `correo_usu` VARCHAR(30) NULL,
  `genero_usu` VARCHAR(10) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `administrador` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,    
  `dir_adm` VARCHAR(30) NULL,
  `cargo_adm` VARCHAR(30) NULL,
  PRIMARY KEY (`idAdmin`, `idUsuario`),
  FOREIGN KEY (`idUsuario`)
    REFERENCES  `usuario` (`idUsuario`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `contactoEmergencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `contactoEmergencia` (
  `idContacto` INT NOT NULL AUTO_INCREMENT,
  `nom_cont` VARCHAR(50) NULL,
  `tel_cont` VARCHAR(50) NULL,
  PRIMARY KEY (`idContacto`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `Usu_tiene_contEme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `Usu_tiene_contEme` (
  `idUsuario` INT NOT NULL ,
  `idContacto` INT NOT NULL,
  PRIMARY KEY (`idUsuario` , `idContacto`),
  FOREIGN KEY (`idUsuario`)
    REFERENCES  `usuario` (`idUsuario`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
    FOREIGN KEY (`idContacto`)
    REFERENCES  `contactoEmergencia` (`idContacto`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `Usu_notifica_contEme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `Usu_notifica_contEme` (
  `idUsuario` INT NOT NULL,
  `idContacto` INT NOT NULL,
  `ubicacion` VARCHAR(100) NULL,
  `fecha` TIMESTAMP NOT NULL,
  PRIMARY KEY (`idUsuario` , `idContacto`),
  FOREIGN KEY (`idUsuario`)
    REFERENCES  `usuario` (`idUsuario`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
    FOREIGN KEY (`idContacto`)
    REFERENCES  `contactoEmergencia` (`idContacto`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `evento` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nom_evento` VARCHAR(100) NULL,
  `hora_evento` TIME NULL,
  `fecini_evento` DATE NULL,
  `fecfin_evento` DATE NULL,
  `modalidad` VARCHAR(50) NULL,
  `link` VARCHAR(100) NULL,
  `tipo` VARCHAR(50) NULL,
  `descripcion` VARCHAR(300) NULL,
  `dir_imagen` VARCHAR(250) NULL,
  PRIMARY KEY (`idEvento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table  `material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `material` (
  `idMaterial` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idMaterial`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `norma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `norma` (
  `idMaterial` INT NOT NULL,
  `vigencia_nor` DATE NOT NULL,
  `fuente_nor` VARCHAR(50) NOT NULL,
  `desc_nor` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idMaterial`),
  FOREIGN KEY (`idMaterial`)
    REFERENCES  `material` (`idMaterial`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `educativo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `educativo` (
  `idMaterial` INT NOT NULL AUTO_INCREMENT,
  `desc_edu` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idMaterial`),
  FOREIGN KEY (`idMaterial`)
    REFERENCES  `material` (`idMaterial`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `centroAyuda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `centroAyuda` (
  `idCentro` INT NOT NULL AUTO_INCREMENT,
  `foto_cna` VARCHAR(100) NULL,
  `nomb_cna` VARCHAR(50) NOT NULL,
  `categ_cna` VARCHAR(50) NOT NULL,
  `dir_cna` VARCHAR(50) NOT NULL,
  `desc_cna` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCentro`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `denuncia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `denuncia` (
  `idDenuncia` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT  NULL,
  `tipo_den` VARCHAR(50) NOT NULL,
  `fec_den` TIMESTAMP NOT NULL,
  PRIMARY KEY (`idDenuncia`),
  FOREIGN KEY (`idUsuario`)
    REFERENCES  `usuario` (`idUsuario`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `admin_rev_den`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `admin_rev_den` (
  `idAdmin` INT NOT NULL,
  `idDenuncia` INT NOT NULL,
  `fec_ard` TIMESTAMP NOT NULL,
  PRIMARY KEY (`idAdmin` , `idDenuncia`),
  FOREIGN KEY (`idAdmin`)
    REFERENCES  `administrador` (`idAdmin`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
  FOREIGN KEY (`idDenuncia`)
    REFERENCES  `denuncia` (`idDenuncia`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `victima`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `victima` (
  `idVictima` INT NOT NULL AUTO_INCREMENT,
  `nom_vic` VARCHAR(150) NULL,
  `ci_vic` VARCHAR(16),
  `ranEdad_vic` VARCHAR(20),
  `genero_vic`VARCHAR(20),
  PRIMARY KEY (`idVictima`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `victima_den`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `victima_den` (
  `idVictima` INT NOT NULL,
  `idDenuncia` INT NOT NULL,
  PRIMARY KEY (`idVictima`, `idDenuncia`),
  FOREIGN KEY (`idVictima`)
    REFERENCES  `victima` (`idVictima`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
  FOREIGN KEY (`idDenuncia`)
    REFERENCES  `denuncia` (`idDenuncia`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `victima_cen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `victima_cen` (
  `idVictima` INT NOT NULL,
  `idCentro` INT NOT NULL,
  PRIMARY KEY (`idVictima`, `idCentro`),
  FOREIGN KEY (`idVictima`)
    REFERENCES  `victima` (`idVictima`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
  FOREIGN KEY (`idCentro`)
    REFERENCES  `centroAyuda` (`idCentro`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE
  )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `prueba`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `prueba` (
  `idPrueba` INT NOT NULL AUTO_INCREMENT,
  `idDenuncia` INT NOT NULL,
  `archivo_pru` VARCHAR(100) NOT NULL,
  `des_pru` VARCHAR(100) NOT NULL,
  `tipo_pru` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idPrueba`, `idDenuncia`),
  FOREIGN KEY (`idDenuncia`)
    REFERENCES  `denuncia` (`idDenuncia`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `testigo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `testigo` (
  `idTestigo` INT NOT NULL AUTO_INCREMENT,
  `nom_tes` VARCHAR(150) NULL,
  `ci_tes` VARCHAR(16),
  `genero_tes`VARCHAR(20),
  PRIMARY KEY (`idTestigo`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `den_testigo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `den_testigo` (
  `idTestigo` INT NOT NULL,
  `idDenuncia` INT NOT NULL,
  PRIMARY KEY (`idTestigo`, `idDenuncia`),
  FOREIGN KEY (`idTestigo`)
    REFERENCES  `testigo` (`idTestigo`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
  FOREIGN KEY (`idDenuncia`)
    REFERENCES  `denuncia` (`idDenuncia`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `acusado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `acusado` (
  `idAcusado` INT NOT NULL AUTO_INCREMENT,
  `nom_acu` VARCHAR(150) NULL,
  `ci_acu` VARCHAR(16) NULL,
  `ranEdad_acu` VARCHAR(20) NULL,
  `genero_acu`VARCHAR(20) NOT NULL,
  `dir_acu` VARCHAR(16) NULL,
  `foto_acu` VARCHAR(100) NULL,
  PRIMARY KEY (`idAcusado`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table  `acusado_den`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS  `acusado_den` (
  `idAcusado` INT NOT NULL,
  `idDenuncia` INT NOT NULL,
  PRIMARY KEY (`idAcusado`, `idDenuncia`),
  FOREIGN KEY (`idAcusado`)
    REFERENCES  `acusado` (`idAcusado`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE,
  FOREIGN KEY (`idDenuncia`)
    REFERENCES  `denuncia` (`idDenuncia`)
    ON DELETE  CASCADE
    ON UPDATE  CASCADE)
ENGINE = InnoDB;