
import React, { useState } from 'react'

export default function Navigation() {
   const [isSelected, setSelected] = useState(0)
   return (
      <div>

         <nav>
            <ul className="ul">
               <li className={`nav-ele ${isSelected == 0 ? "active" : ""}`} onClick={() => setSelected(0)}><a href="#home"><span class="text-dec-none">Home</span></a></li>
               <li className={`nav-ele ${isSelected == 1 ? "active" : ""}`} onClick={() => setSelected(1)}><a herf="#news">News</a></li>
               <li className={`nav-ele ${isSelected == 2 ? "active" : ""}`} onClick={() => setSelected(2)}><a href="#about">About</a></li>
               <li className={`nav-ele ${isSelected == 3 ? "active" : ""}`} onClick={() => setSelected(3)}><a href="#contact">Contact</a></li>
            </ul>

         </nav>
      </div>
   )
}
