import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [givenPlayerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName (playerName.current.value);
  }

  return (
    <section id="player" className="player">
      <h2>Welcome, {givenPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}



// v1
// import { useState } from 'react';

// export default function Player() {
//   const [playerName, setPlayerName] = useState('');
//   const [sub, setSub] = useState(false);

//   function handleChange(evt) {
//     setPlayerName(evt.target.value);
//   }

//   function handleClick() {
//     setSub(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome, {sub ? playerName : 'unknown entity'}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={playerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }

