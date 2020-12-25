import React from 'react';
import Publication from './Publication';

const Publications = () => {
  return (
    <section id="publications">
      <div id="publications-header">Publications</div>
      <div id="publications-grid">
      <Publication 
          title="Lydia"
          source="The Hunger"
          time="Winter 2021"
        />
        <Publication 
          title="The Horses"
          source="(mac)ro(mic)"
          time="Winter 2021"
        />
        <Publication 
          title="The Crawdad"
          source="Flash Fiction Magazine"
          url="https://flashfictionmagazine.com/?s=The+Crawdad"
          time="Summer 2020"
        />
        <Publication 
          title="Unicorn Cake"
          source="Litro"
          url="https://www.litromagazine.com/usa/2020/11/unicorn-cake/"
          time="Fall 2020"
        />
      </div>
    </section>
  )
}

export default Publications;