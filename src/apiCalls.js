const getTricks = (address) => {
  return fetch("http://localhost:3001/api/v1/tricks")
  .then(response => response.json())
}
export {getTricks}