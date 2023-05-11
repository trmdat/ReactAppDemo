import React from 'react'
import { Players } from './shared/ListOfPlayers'
export default class Player extends React.Component {
   render() {
      return (
         <div className='container'>
            {Players.map(Player => (
               <div className='column'>
                  <div className='card'>
                     <img src={Player.img} />
                     <h3>{Player.name}</h3>
                     <p className='title'>{Player.club}</p>
                     <p><button>detail</button></p>
                  </div>
               </div>
            ))}
         </div>
      )
   }
}