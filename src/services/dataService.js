//const url = 'http://localhost:3030/data/films'
const urlWithoutAuthoriztion = 'http://localhost:3030/jsonstore/games'

export async function getAll() {

   const response = await fetch (urlWithoutAuthoriztion)
   console.log(response);
   const data = await response.json();
   return data;
    
}

export async function create(title, category, maxLevel, imageUrl, summary) {

    const response = await fetch (urlWithoutAuthoriztion, {
        method: "POST",
        headers: {
            "Content-type":  "application/json"
        },
        body: JSON.stringify({ 
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }),
        
        }
    );
    // const data = await response.json();
    // console.log(data);
    
    return response
}


export async function getById(id) {

    const response = await fetch(`${urlWithoutAuthoriztion}/${id}`)
    const data = await response.json();
    
    return data
}

export async function edit(id, title, category, maxLevel, imageUrl, summary) {

// - **Method:** `PUT`
// - **Endpont:** `/jsonstore/books/asdf-1234`
// - **Headers:** `Content-Type: application/json`
// - **Body:** *JSON-formatted data*
    const response = await fetch (`${urlWithoutAuthoriztion}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type":  "application/json"
        },
        body: JSON.stringify({ 
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }),
        
        }
    );
    const data = await response.json();
    console.log(data);
    
    return data

}


// {
//     "title": "HAHAHAHAHAHA",
//      "category": "Comedy",
//      "maxLevel": "5",
//      "imageUrl": "www.gooogle.bg",
//      "summary": "skdjfhjdks jdksahfjdla kdsjkfjghjfkdljfhskjfhgs"
//  }
 