import React from "react"
import "./TrickCard.css"

const TrickCard = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className="trick-card" id={id}>
      <h2>{name}</h2>
      <p>{`Stance: ${stance}`}</p>
      <p>{`Obstacle: ${obstacle}`}</p>
      <a href={tutorial}>{`${name} tutorial`}</a>

    </div>
  )
}

export default TrickCard