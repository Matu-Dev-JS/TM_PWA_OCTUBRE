# POO - Funcion Constructora
Entidad
    Atributos/Propiedades:
        - Nombre
        - Id
        - Activo
        
    Metodos:    
        - delete() (debe desactivar la entidad)
        - mostrar() (debe mostrar la informacion de la entidad)

Ejemplo: 

```js
    function Entidad(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.activo = true;
        Entidad.prototype.delete = function() {
            this.activo = false;
        }
        Entidad.prototype.mostrar = function() {
            console.log('Entidad: ', this.id, this.nombre, this.activo);
        }
    }
```

## En base al ejemplo mostrado, desarrollar las siguentes funciones constructoras:

Usuario
    Atributos/Propiedades:
        - Nombre string
        - Id number
        - Email string
        - Password string
        - Activo boolean
    
    Metodos:
        - setPassword(newPassword) (debe cambiar la contraseña)
        - getInformacion() (debe devolver la informacion del usuario sin el password) 
        - delete() (debe desactivar el usuario)

Proveedor
    Atributos/Propiedades:
        - Nombre string
        - Id number
        - Direccion string
        - Telefono string
        - Email string
        - Productos Producto[]

    Metodos:
        - getProductoPorId(id) (debe devolver el producto por su id o null si no existe)