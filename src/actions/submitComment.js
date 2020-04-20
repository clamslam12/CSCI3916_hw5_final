import runtimeEnv from "@mars/heroku-js-runtime-env";

export function submitComment(token,data){
    const env = runtimeEnv();
    console.log(data)
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'jwt ' + token
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                if(res.success) {
                  console.log(res)
                }
                else{
                    return []
                }
            })
            .catch( (e) => console.log(e) );
    }
}