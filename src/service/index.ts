// Get auth token
export async function getToken(){
  return await fetch(
    "http://localhost:5000/api/auth"
    )
    .then(res => res.json())
}


// Get all quotes
// param is token string for auth
export async function getAllQuotes(token: string){
  return await fetch(
    "http://localhost:5000/api/quotes", {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => res.json())
}