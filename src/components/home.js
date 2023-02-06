import React, {useState} from 'react'
import Logo from '../img/Logo.svg'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {

  const [data, setData] = useState()

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then(promise => promise.json())
    .then(response => setData(response))

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
          
          <section className='section-bg'>
            <div className='section-search'>
              <div className='form-control'>
                <label for="name">Search Your Favorite Cocktail</label>
                <input type="text" name='name' id='name'/>
              </div>
            </div>
          </section>

          <main className='section-main'>
            <h1 className='section-title'>Cocktails</h1>
            <ul className='section-grid'>
              {data ? data.drinks.map((item, index) => (
                  <li key={index}>
                    <div className='section-grid-img'>
                      <img src={item.strDrinkThumb} alt='Test'/>
                    </div>
                    <div className="section-grid-footer">
                      <h1>{item.strDrink}</h1>
                      <h2>{item.strGlass}</h2>
                      <p>{item.strAlcoholic}</p>
                      <Link to="/details" onClick={() => console.log(item.idDrink)}>Details</Link>
                    </div>
                  </li>
              )) : ""}
             </ul>
          </main>
      </div>
  )
}

export default Home