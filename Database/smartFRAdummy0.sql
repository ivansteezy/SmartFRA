-- MySQL Script generated by MySQL Workbench
-- Thu Sep 22 12:48:25 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `smartfra0` ;
-- -----------------------------------------------------
-- Schema smartfra0
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `smartfra0` DEFAULT CHARACTER SET utf8mb4 ;
USE `smartfra0` ;

-- -----------------------------------------------------
-- Table `smartfra0`.`Houses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`Houses` (
  `idHouse` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NOT NULL,
  `numberHouse` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idHouse`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`Residents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`Residents` (
  `idResidents` INT NOT NULL AUTO_INCREMENT,
  `residentName` TEXT(30) NOT NULL,
  `lastName` TEXT(30) NOT NULL,
  `motherLastName` TEXT(30) NOT NULL,
  `age` DECIMAL(2) NOT NULL,
  `idHouse` INT NOT NULL,
  `plates` VARCHAR(7) NULL,
  `telephone` DECIMAL(15) NOT NULL,
  `faceModel` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idResidents`),
  CONSTRAINT `fkIdHouse`
    FOREIGN KEY (`idHouse`)
    REFERENCES `smartfra0`.`Houses` (`idHouse`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`ResidentEvents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`ResidentEvents` (
  `idEvent` INT NOT NULL AUTO_INCREMENT,
  `IdResident` INT NOT NULL,
  `nameEvent` VARCHAR(45) NOT NULL,
  `startTime` DATETIME(6) NOT NULL,
  `endTime` DATETIME(6) NOT NULL,
  `state` TINYINT NOT NULL,
  `numberAccess` INT NOT NULL,
  PRIMARY KEY (`idEvent`),
  CONSTRAINT `fkIdResident`
    FOREIGN KEY (`IdResident`)
    REFERENCES `mydb`.`Residents` (`idResidents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`Guests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`Guests` (
  `idGuest` INT NOT NULL AUTO_INCREMENT,
  `IdEvent` INT NOT NULL,
  `name` TEXT(30) NOT NULL,
  `lastName` TEXT(30) NOT NULL,
  `plates` VARCHAR(45) NULL DEFAULT 'None',
  `telephone` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idGuest`),
  CONSTRAINT `fkIdEvent`
    FOREIGN KEY (`IdEvent`)
    REFERENCES `smartfra0`.`ResidentEvents` (`idEvent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`ResidentServiceAccess`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`ResidentServiceAccess` (
  `idServiceAccess` INT NOT NULL AUTO_INCREMENT,
  `ResidentId` INT NOT NULL,
  `accessTime` DATETIME(6) NOT NULL,
  `exitTime` DATETIME(6) NOT NULL,
  `providerName` TEXT(30) NOT NULL,
  `cellPhone` VARCHAR(20) NOT NULL,
  `cicNumber` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idServiceAccess`),
  CONSTRAINT `fkResidentId`
    FOREIGN KEY (`ResidentId`)
    REFERENCES `smartfra0`.`Residents` (`idResidents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`Services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`Services` (
  `idServices` INT NOT NULL AUTO_INCREMENT,
  `serviceName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idServices`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`GeneralServiceAccess`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`GeneralServiceAccess` (
  `idServiceAccess` INT NOT NULL AUTO_INCREMENT,
  `accessTime` DATETIME(6) NOT NULL,
  `exitTime` DATETIME(6) NOT NULL,
  `providerName` TEXT(40) NOT NULL,
  `companyName` TEXT(40) NOT NULL,
  `cellPhone` VARCHAR(20) NOT NULL,
  `cicNumber` VARCHAR(30) NOT NULL,
  `conceptName` INT NOT NULL,
  PRIMARY KEY (`idServiceAccess`),
  CONSTRAINT `fkConceptName`
    FOREIGN KEY (`ConceptName`)
    REFERENCES `smartfra0`.`Services` (`idServices`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`ResidentAccess`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`ResidentAccess` (
  `idResidentAccess` INT NOT NULL AUTO_INCREMENT,
  `IdResident` INT NOT NULL,
  `acessTime` DATETIME(6) NOT NULL,
  `exitTime` DATETIME(6) NOT NULL,
  PRIMARY KEY (`idResidentAccess`),
  CONSTRAINT `fkIdResidentA`
    FOREIGN KEY (`IdResident`)
    REFERENCES `smartfra0`.`Residents` (`idResidents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smartfra0`.`GuestAccess`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfra0`.`GuestAccess` (
  `idGuestAccess` INT NOT NULL AUTO_INCREMENT,
  `IdGuest` INT NOT NULL,
  `accessTime` DATETIME(6) NOT NULL,
  `exitTime` DATETIME(6) NOT NULL,
  PRIMARY KEY (`idGuestAccess`),
  CONSTRAINT `fkIdGuest`
    FOREIGN KEY (`IdGuest`)
    REFERENCES `smartfra0`.`Guests` (`idGuest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -------------------------------------------- INSERTS ---------------------------

-- HOUSES DUMMY ---
INSERT INTO Houses VALUES ("0","Lazaro Cárdenas 2834", "1");
INSERT INTO Houses VALUES ("0","Lazaro Cárdenas 2834", "2");
INSERT INTO Houses VALUES ("0","Lazaro Cárdenas 2834", "3");
INSERT INTO Houses VALUES ("0","Lazaro Cárdenas 2834", "4");
INSERT INTO Houses VALUES ("0","Lazaro Cárdenas 2834", "5");
-- truncate table Houses;

-- RESIDENTS DUMMY --
INSERT INTO Residents VALUES ("0","Alma Alejandra","Hernández","Jiménez","21","1","2488ZFH","3321779665","2488ZFH.xml");
INSERT INTO Residents VALUES ("0","Jose Manuel","Buendía","Rodriguez","25","1","2488ZFH","3321771234","2488ZFH2.xml");

INSERT INTO Residents VALUES ("0","Ivan Oswaldo","Ayala","Martinez","22","2","7174NVE","3331245678","7174NVE.xml");
INSERT INTO Residents VALUES ("0","Hector Javier","Delgado","Neveu","21","3","7151SZT","3312564356","7151SZT.xml");
INSERT INTO Residents VALUES ("0","Mariana","Munguia","Mota","22","4","5029XPW","3312675460","5029XPW.xml");
INSERT INTO Residents VALUES ("0","Damian","Araujo","García","22","5","5902ZHQ","3312657877","5902ZHQ.xml");
-- truncate table Residents;

-- SERVICES DUMMY ---
INSERT INTO Services VALUES ("0","Agua");
INSERT INTO Services VALUES ("0","Gas");
INSERT INTO Services VALUES ("0","Jardineria");
INSERT INTO Services VALUES ("0","Electricidad");
INSERT INTO Services VALUES ("0","Saneamiento");

-- EVENTS DUMMY ---
INSERT INTO ResidentEvents VALUES ("0","1", "Visita Individual", "2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000","1","1");
INSERT INTO ResidentEvents VALUES ("0","3", "Fiesta Sorpresa", "2022-09-26 08:00:00.000000","2022-09-27 23:59:00.000000","1","3");
INSERT INTO ResidentEvents VALUES ("0","4", "Visita Individual", "2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000","1","1");

-- truncate table ResidentEvents;
-- GUEST DUMMY ---
INSERT INTO Guests VALUES ("0","1", "Miranda","Sepulveda Barajas","5874DJR","3324675412");
INSERT INTO Guests VALUES ("0","2", "Danilo","Sepulveda Rios","4404LKE","332412123421");
INSERT INTO Guests VALUES ("0","2", "Mariano","Trinchera Escobedo","8145MGQ","3321556645");
INSERT INTO Guests VALUES ("0","2", "Mayra","Trinchera Escobedo","","3321557789");
INSERT INTO Guests VALUES ("0","3", "Zoe","Mundeta Galvan","","3321878765");


-- GUEST ACCESS DUMMY ----
INSERT INTO GuestAccess VALUES ("0","1","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO GuestAccess VALUES ("0","2","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO GuestAccess VALUES ("0","3","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO GuestAccess VALUES ("0","4","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO GuestAccess VALUES ("0","5","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");


-- RESIDENT ACCESS DUMMY ----
INSERT INTO ResidentAccess VALUES ("0","1","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO ResidentAccess VALUES ("0","2","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO ResidentAccess VALUES ("0","3","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO ResidentAccess VALUES ("0","4","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");
INSERT INTO ResidentAccess VALUES ("0","5","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000");

-- GENERAL SERVICE ACCESS DUMMY ----
INSERT INTO GeneralServiceAccess VALUES ("0","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000","Ignacio Bautista Morfin","3321554467","183657717","1","2");
INSERT INTO GeneralServiceAccess VALUES ("0","2022-09-22 12:00:00.000000","2022-09-22 23:59:00.000000","Miranda Morales Sanchez","3312349812","183657717","2","2");
INSERT INTO GeneralServiceAccess VALUES ("0","2022-09-22 12:00:00.000000","2022-09-22 13:59:00.000000","Juan Gonzalo Tavizon","3312567131","183657717","3","2");

-- RESIDENTS SERVICE ACCESS DUMMY ----
INSERT INTO ResidentServiceAccess VALUES ("0","1","2022-09-24 12:00:00.000000","2022-09-24 23:59:00.000000","Ignacio Bautista Morfin","3321554467","183657717");
INSERT INTO ResidentServiceAccess VALUES ("0","3","2022-09-22 12:00:00.000000","2022-09-22 23:59:00.000000","Miranda Morales Sanchez","3312349812","183657717");
INSERT INTO ResidentServiceAccess VALUES ("0","5","2022-09-22 12:00:00.000000","2022-09-22 13:59:00.000000","Juan Gonzalo Tavizon","3312567131","183657717");

-- DROPS --------------------------
-- drop table smartfra0.residentserviceaccess;
-- drop table smartfra0.generalserviceaccess;
-- drop table smartfra0.residentaccess;
-- drop table smartfra0.guestaccess;
-- drop table smartfra0.services;
-- drop table smartfra0.guests;
-- drop table smartfra0.residentevents;
-- drop table smartfra0.residents;
-- drop table smartfra0.houses;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=1;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
