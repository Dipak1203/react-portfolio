import React from 'react'
import { portfolioData } from '../api/Data'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          {
            portfolioData.map(({ id, title, img, github, live }) => {
              return (
                <div key={id} className='portfolio_data'>
                  <div className="portfolio__item__image">
                    <img src={img} alt="portfolio" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item__cta">
                    <a href={github} className="btn" target="_blank">Github</a>
                    <a href={live} className="btn btn-primary" target="_blank">Live</a>
                  </div>
                </div>
              )
            })
          }

        </article>
      </div>
    </section>
  )
}




export default Portfolio