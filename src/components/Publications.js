import React from 'react';

const Publications = () => {
  return (
    <section id="publications">
      <div className="header">Publications</div>

      <div className="publication-container">
        <div className="publications-time">Winter 2021</div>
        <div className="publication">
          "Lydia" / <em>The Hunger</em> / Forthcoming
        </div>
        <div className="publication">
          "The Horses" / <em>(mac)ro(mic)</em> / Forthcoming
        </div>
      </div>

      <div className="publication-container">
        <div className="publications-time">Fall 2020</div>
        <div className="publication">
          "Unicorn Cake" / <em>Litro</em> / <a href="https://www.litromagazine.com/usa/2020/11/unicorn-cake/" target="_blank" rel="noreferrer">Read Story</a>
        </div>
      </div>

      <div className="publication-container">
        <div className="publications-time">Summer 2020</div>
        <div className="publication">
          "The Crawdad" / <em>Flash Fiction Magazine</em> / <a href="https://flashfictionmagazine.com/?s=The+Crawdad" target="_blank" rel="noreferrer">Read Story</a>
        </div>
      </div>

    </section>
  )
}

export default Publications;