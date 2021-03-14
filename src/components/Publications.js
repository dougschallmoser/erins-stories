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
            title="Ministrations of the Universe"
            source="White Wall Review"
          />
          <Publication 
            link=""
            title="If You Were a Tasmanian Devil"
            source="Hobart"
          />
          <Publication 
            link=""
            title="Passenger"
            source="Rejections Letters"
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
            link="https://www.horseeggliterary.com/post/fruit-flies-by-erin-schallmoser"
            title="Fruit Flies"
            source="Horse Egg Literary"
          />
          <Publication 
            link="https://miniskirtmagazine.com/issue-01/the-alchemy-of-starlight-by-erin-schallmoser/"
            title="The Alchemy of Starlight"
            source="miniskirt magazine"
          />
          <Publication 
            link="https://www.theaurorajournal.org/aurora-anonymous/writing-as-a-jellyfish-bloom"
            title="Writing as a Jellyfish Bloom"
            source="The Aurora Journal (Aurora Anonymous)"
          />               
          <Publication 
            link="https://www.thehungerjournal.com/lydia-erin-schallmoser"
            title="Lydia"
            source="The Hunger"
          />

          <Publication 
            link="http://www.svjlit.com/dispatches/schuylkill-valley-journal-featuring-the-work-of-authors-and-artists-from-philadelphia-and-beyond-online/2021/1/26/we-know-just-enough-by-erin-schallmoser"
            title="We Know Just Enough"
            source="Schuylkill Valley Journal (Dispatch)"
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