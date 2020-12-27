import React from 'react';
import Publication from './Publication';

const Publications = () => {
  return (
    <section id="publications">
      <div className="header">Publications</div>

      <div className="publication-container">
        <div className="publications-time">Winter 2021</div>
        <Publication 
          link=""
          title="Ingrid's Earthworm"
          source="Second Chance Lit"
        />
        <Publication 
          link=""
          title="Lydia"
          source="The Hunger"
        />
        <Publication 
          link=""
          title="The Horses"
          source="(mac)ro(mic)"
        />
      </div>

      <div className="publication-container">
        <div className="publications-time">Fall 2020</div>
        <Publication 
          link="https://www.litromagazine.com/usa/2020/11/unicorn-cake/"
          title="Unicorn Cake"
          source="Litro"
        />
      </div>

      <div className="publication-container">
        <div className="publications-time">Summer 2020</div>
        <Publication 
          link="https://flashfictionmagazine.com/?s=The+Crawdad"
          title="The Crawdad"
          source="Flash Fiction Magazine"
        />
      </div>

    </section>
  )
}

export default Publications;