class Historial{
    accion_id_counter: number = 0
    acciones:Accion[] = []

    agregarAccion(
        descripcion:string,
        nombre:string,
    ): void {
            const nuevaAccion:Accion = new Accion(this.accion_id_counter,descripcion,nombre)
            this.acciones.push(nuevaAccion)
            this.accion_id_counter++
    }
    
    eliminarTodo() : void{
        this.acciones=[]
    }
    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter((accion : Accion) : boolean => accion.id !== id)
    }
    mostrarHistorial() : void {
        
        console.log("Lista de acciones:")
        this.acciones.forEach((accion:Accion)=>{
            console.log(
                `ID: ${accion.id},
                Descripción: ${accion.descripcion},
                Fecha: ${accion.fecha},
                Nombre: ${accion.nombre}`
            )
        })

    }
}

class Accion{
    id:number
    descripcion:string
    fecha:Date
    nombre:string
    
    constructor(
        id:number,
        descripcion:string,
        
        nombre:string,
    ){
        this.id=id
        this.descripcion=descripcion
        this.fecha= new Date()
        this.nombre=nombre

    }
}