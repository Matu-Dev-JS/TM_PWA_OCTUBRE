export const getAuthenticatedHeaders = () =>{
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
}