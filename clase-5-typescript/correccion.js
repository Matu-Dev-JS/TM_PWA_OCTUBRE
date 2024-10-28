
/* 
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
*/
function Usuario(id, nombre,password,email) {
    this.id = id;
    this.nombre = nombre;
    this.email=email
    this.pasword=password
    this.activo = true;


    Usuario.prototype.delete = function() {
        this.activo = false;
    }
    Usuario.prototype.setPassword = function(newPassword) {
        this.password=newPassword
    }
    Usuario.prototype.getInformacion = function() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email
        }
    }
    
}

/* 
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
*/
function Proveedor(nombre, id, direccion,telefono, email) {
    this.nombre = nombre
    this.id = id
    this.direccion = direccion
    this.telefono = telefono
    this. email = email
    this.productos = []
    Proveedor.prototype.getProductoPorId = function(id){
      return this.productos.find(producto => producto.id === id) || null;
    }
  }