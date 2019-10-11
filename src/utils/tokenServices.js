/**
 * Sets the token to local storage
 */
const jwtdecode = require('jwt-decode');

function setToken(token) {
  if (token) {
    localStorage.setItem('app-token', token);
  } else {
    localStorage.removeItem('app-token');
  }
}
/**
 * Gets the token from local storage and decodes the information needed
 */
function getToken() {
  const token = localStorage.getItem('app-token');
  if(token === null){
    return null;  
  }
  const results = jwtdecode(token);
  return {id: results.id, persona: results.persona}
}

function removeToken() {
  localStorage.removeItem('app-token');
}

module.exports = {
  setToken,
  getToken,
  removeToken,
}