import React, { useState } from 'react'
import { Players } from './shared/ListOfPlayers'
export default function Player() {
   const [player, setPlayer] = useState([])
   return (
      <div className='container'>
         {Players.map((player) => (
            <div className='column'>
               <div key={player.id} className='card'>
                  <img src={player.img} />
                  <h3>{player.name}</h3>
                  <p className='title'>{player.club}</p>
                  <button onClick={() => { setPlayer(player) }}><a href='#popup1' id='openPopUp'>Detail</a></button>
               </div>
            </div>
         ))}
         <div id='popup1' className='overlay'>
            <div className='popup'>
               <img src={player.img} />
               <h2>{player.name}</h2>
               <a className='close' href='#'>&times;</a>
               <div className='content'>
                  {player.info}
               </div>
            </div>
         </div>
      </div>
   )
}
