const url = "http://localhost:3030/users"

export async function loginFunction({email, password}) {
  
    const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    console.log(await response.json());
    return response;
}

export async function registerFunction({email, password}) {

    const response = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
           email,
           password
        })
    });

    return response;

}