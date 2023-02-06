import React from 'react'
import Logo from '../img/Logo.svg'
import './about.css'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
       <header>
          <a href="/"><img className='logo' src={Logo} alt='Logomarca'/></a>
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
            </ul>
          </nav>
        </header>

          <section>
            <h1 className='about-section-title'>About Us</h1>
            <p className='about-section-main'>Cocktails are mixed drinks that usually consist of a combination of different types of alcoholic beverages such as whiskey, gin, rum, tequila, among others, along with ingredients such as fruit juice, syrup, sparkling water and spices. They are often served in a cocktail glass and garnished with fruit, colored sugar, and other adornments. Cocktails are popular at social events and in bars and restaurants. There are many different types of cocktails, each with its own personality and history. Some of the most popular cocktails include Martini, Margarita, Manhattan, Old Fashioned and Mojito. Cocktails can also be created specifically for special occasions or to pair with food.</p>
          </section>
    </div>
  )
}

export default About
