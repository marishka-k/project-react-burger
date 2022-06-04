export const BASEURL = "https://norma.nomoreparties.space/api/ingredients"

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
  
export const getIngredients = () => {
  return fetch(BASEURL, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(checkResponse);
}
