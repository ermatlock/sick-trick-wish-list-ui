const getTricks = () => {
  return fetch("http://localhost:3001/api/v1/tricks")
  .then((response) => response.json())
};

const postTrick = ({stance, name, obstacle, tutorial}) => {
  return fetch("http://localhost:3001/api/v1/tricks", {
  method: "POST"
  body: JSON.stringify({
    stance: stance,
    name: name,
    obstacle: obstacle,
    tutorial: tutorial
  }),
  headers: { "Content-Type": "application/json" },
})
}

export { getTricks, postTrick };
