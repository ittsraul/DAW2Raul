CREATE DATABASE IF NOT EXISTS 'AEVDESP';

USE 'AEVDESP';

CREATE TABLE 'AEV' (
    'name' VARCHAR(255) NOT NULL,
    'surname' VARCHAR(255),
)

INSERT INTO 'AEV'(
    'name',
    'surname'
) VALUES ('MiNombre','MiApellido')
