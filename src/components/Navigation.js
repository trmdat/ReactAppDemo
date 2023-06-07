import React, { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Navigation() {
   const [isSelected, setSelected] = useState(0)
   const { theme, toggle, dark } = useContext(ThemeContext)
   return (
      <div>
         <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <ul className="ul">
               <li className={`nav-ele ${isSelected == 0 ? "active" : ""}`} onClick={() => setSelected(0)}><a herf="#home"><span class="text-dec-none">Home</span></a></li>
               <li className={`nav-ele ${isSelected == 1 ? "active" : ""}`} onClick={() => setSelected(1)}><a herf="#news">News</a></li>
               <li className={`nav-ele ${isSelected == 2 ? "active" : ""}`} onClick={() => setSelected(2)}><a herf="#about">About</a></li>
               <li className={`nav-ele ${isSelected == 3 ? "active" : ""}`} onClick={() => setSelected(3)}><a herf="#contact">Contact</a></li>
            </ul>

            <div className='mode' style={{ position: 'relative' }}>
               <a className='switch-mode' href='#' onClick={toggle}
                  style={{
                     backgroundColor: theme.backgroundColor,
                     color: theme.color,
                     outline: 'none'
                  }} data-testid="toggle-theme-btn"
               >
                  Switch Nav to {!dark ? 'Dark' : 'Light'} mode
               </a>
            </div>
         </nav>
      </div>
   )
}
