/**
 * Sets the token to local storage
 */
function setToken(token) {
  if (token) {
    localStorage.setItem('app-token', token);
  } else {
    localStorage.removeItem('app-token');
  }
}


function getToken() {
  return localStorage.getItem('app-token');
}

function removeToken() {
  localStorage.removeItem('app-token');
}

module.exports = {
  setToken,
  getToken,
  removeToken,
}