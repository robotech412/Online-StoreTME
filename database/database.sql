CREATE DATABASE tme_tienda;

USE tme_tienda;

CREATE TABLE productos(
    id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR (130),
    precio DECIMAL (18,2),
    descripcion VARCHAR (200),
    color VARCHAR (50),
    tallas VARCHAR (50),
    cantidad INT,
    image VARCHAR (200),
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE productos;