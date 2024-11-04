# Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en JavaScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.

## Objetivo

- **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
- **Usar métodos avanzados de arrays** como filter, find, y findIndex para gestionar el historial.
- **Aplicar conceptos de POO** como clases, objetos, métodos.

## Tareas

1. **Definir una clase Historial**:
   - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
   - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.

2. **Crear una clase Accion**:
   - Cada acción será representada por una instancia de la clase Accion.
   - Esta clase tendrá propiedades para id, descripcion y fecha, nombre.

3. **Crear métodos en la clase Historial**:
   - **agregarAccion(accion)**: Método para agregar una nueva acción al historial.
   - **eliminarAccionPorID(id)**: Método para eliminar una acción específica del historial usando su ID.
   - **eliminarTodo()**: Método para eliminar todas las acciones del historial.
   - **mostrarHistorial()**: Método para mostrar en la consola todas las acciones en el historial.

## EJEMPLOS

HISTORIAL {
   accion_id_counter: 0,
   acciones: [] // Array de acciones
}

Accion {
   id,
   descripcion,
   fecha,
   nombre
}




