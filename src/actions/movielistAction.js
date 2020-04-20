import runtimeEnv from "@mars/heroku-js-runtime-env";

export function retrieveMovieList(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/movies?reviews=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'jwt ' + data
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                if(res.success) {
                    return res.results
                }
                else{
                    return []
                }
            })
            .catch( (e) => console.log(e) );
    }
}
export function retrieveMovie(data){
    const env = runtimeEnv();
    let title = (localStorage.getItem("title"))
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/movies?reviews=true&title=${title}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'jwt ' + data
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                if(res.success) {
                    return res
                }
                else{
                    return []
                }
            })
            .catch( (e) => console.log(e) );
    }
}