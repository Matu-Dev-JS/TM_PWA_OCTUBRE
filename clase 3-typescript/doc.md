## tsconfig.json:
Es un archivo de configuracion que indica a typescript como debe ser compilado y como debe ser interpretado

## Declarar variable
Podemos hace 2 cosas:
    -Explicitamente darle un tipo a la variable
        let nombre : string = 'pepe'

    -Implicitamente inferir el tipo de dato de la variable
        let nombre = 'pepe'

    (typescript infiere que el tipo es string)


## Funciones
Si una funcion no devuelve nada debemos tipar el retorno como void

ejemplo:
function doSomething () : void {
    alert('Algo')
}

Si una funcion devuelve un valor, debemos tipar el retorno del valor


ejemplo:
function buscarAlgo() : string | undefined {
    //logica de busqueda
    let resultado : string | undefined 
    return resultado
}


Si una funcion recibe parametros debemos tipar los parametros:

ejemplo
const suma = (a: number, b: number) : number => a + b;