

//ES6
//Intenta resolver un bloque de codigo
try{
    //crash?  que mi aplicacion se corte o deje de ejecutarse
    console.log(hola)
}
//Si algo falla
catch(error){
    console.error('Ocurrio un error excepcional')
}


console.log('Operacion super importante')


//Crear 2 funciones llamadas proceso1, y proceso2
//Ambas funciones deben tener un try catch dentro
//Ambas funciones solo diran por consola,
//- proceso 1 o 2 dependiendo de que proceso sea esa funcion
//Proceso 1 intecionalmente tendra un error
//Invocar ambas funciones y asegurarse que ambas se ejecuten
//Ejemplo
//proceso1()
//proceso2()
//se debe tener por consola el mensaje de proceso2

const fn = ( ) => {
    try{
        let 
    }
    catch(error){

    }
}


const procesos1 = () => {
    try {
        hola
        const resultado = [[]]
        console.log(resultado)
    } catch (error) {
        console.error(error.message)
      console.error('Se produjo un error: 😫 en el proceso 1' )
    }
  }
  
  const procesos2 = () => {
    try {
      console.log('Proceso 2:' + '😎');
    } catch (error) {
      console.error('Se produjo un error: 😫 en el proceso 2' )
    }
  }
procesos1()
procesos2()



module.exports = {}