import React from 'react';
import Publication from './Publication';
import Fade from 'react-reveal/Fade';

const Publications = () => {
  return (
    <section id="publications">
      <div className="header">Publications</div>

      <Fade bottom>
        <div className="publication-container">
          <div className="publications-time">Spring 2021</div>
          <Publication 
            link=""
            title="The Alchemy of Starlight"
            source="miniskirt magazine"
          />
          <Publication 
            link=""
            title="Inherited Beliefs"
            source="Emerge Literary Journal"
          />
          
          <Publication 
            link=""
            title="Front Porch Kathy"
            source="Wrongdoing Magazine"
          />
        </div>
      </Fade>

      <Fade bottom>
        <div className="publication-container">
          <div className="publications-time">Winter 2021</div>
          <Publication 
            link=""
            title="We Know Just Enough"
            source="Schuylkill Valley Journal (Dispatch)"
          />
          
          <Publication 
            link=""
            title="Lydia"
            source="The Hunger"
          />

          <Publication 
            link="https://www.etsy.com/uk/listing/949390791/poetry-by-erin-schallmoser"
            title="Poetry E-Book"
            source="Violet and the Bird"
          />

          <Publication 
            link="https://www.twinpiesliterary.com/nye-special/deadthings"
            title="Dead Things"
            source="Twin Pies Literary"
          />
          
          <Publication 
            link="https://macromic.org/2021/01/20/the-horses-by-erin-schallmoser/"
            title="The Horses"
            source="(mac)ro(mic)"
          />
          
          <Publication 
            link="https://www.secondchancelit.com/schallmoser"
            title="Ingrid's Earthworm"
            source="Second Chance Lit"
          />
        </div>
      </Fade>

      <Fade bottom>
        <div className="publication-container">
          <div className="publications-time">Fall 2020</div>
          <Publication 
            link="https://www.litromagazine.com/usa/2020/11/unicorn-cake/"
            title="Unicorn Cake"
            source="Litro"
          />
        </div>
      </Fade>

      <Fade bottom>
        <div className="publication-container">
          <div className="publications-time">Summer 2020</div>
          <Publication 
            link="https://flashfictionmagazine.com/blog/2020/07/18/the-crawdad/"
            title="The Crawdad"
            source="Flash Fiction Magazine"
          />
        </div>
      </Fade>

    </section>
  )
}

export default Publications;