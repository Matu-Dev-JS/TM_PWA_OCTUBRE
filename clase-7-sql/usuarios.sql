CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    role VARCHAR(15) DEFAULT 'user' NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (
    id, 
    nombre, 
    email, 
    contrasena, 
    direccion, 
    telefono, 
    role, 
    fecha_creacion
) VALUES (
	NULL,
    "pepe",
    "pepe@gmail.com",
    "pepesito123",
    "x",
    "12321213",
    NULL,
    NULL
)