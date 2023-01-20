CREATE DATABASE IF NOT EXISTS 'AEVDESP';

USE 'AEVDESP';

CREATE TABLE 'AEVDESP' (
    'id' INTEGER(4) NOT NULL AUTO_INCREMENT,
    'name' VARCHAR(255) NOT NULL,
    'surname' VARCHAR(255),
    PRIMARY KEY (id)
)

INSERT INTO 'AEV'(
    'name',
    'surname'
) VALUES ('MiNombre', 'MiApellido')

INSERT INTO 'AEV'(
    'name',
    'surname'
) VALUES ('MiNombreDos', 'MiApellidoDos')