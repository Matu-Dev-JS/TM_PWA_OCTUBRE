import ENVIROMENT from "../utils/constants/enviroment"

const consultaDePrueba = async () => {
    try {
        const response = await fetch(
            ENVIROMENT.API_URL + '/api/status/ping',
            {
                method: "GET"
            }
        )
        //Response es la respuesta HTTP
        console.log(response)
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error('ERROR AL CONSULTAR', error)
    }
}