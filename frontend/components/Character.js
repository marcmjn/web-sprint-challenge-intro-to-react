import React, { useState } from 'react';

function Character(props) { // ❗ Add the props
  const [showHomeworld, setShowHomeworld] = useState(false) // ❗ Create a state to hold whether the homeworld is rendering or not

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  } // ❗ Create a "toggle" click handler to show or remove the homeworld




  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{props.name}</h3>
      <p>Gender: {props.gender}</p>
      <p>Birth Year: {props.birthyear}</p>
      <button className="character-planet" onClick={toggleHomeworld}>Click anywhere for homeworld! I'm an entire button</button>
      {showHomeworld && (
        <p>Planet: {props.homeworld.name}</p>

      )}
    </div>
  )
}


export default Character;
