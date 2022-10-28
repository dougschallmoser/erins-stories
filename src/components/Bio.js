import { Contact } from './Contact';

const Bio = ({ setMain }) => {
  return (
    <div>
      <img src="profile.jpg" id="bio-photo" alt="Erin's Profile" />
      <Contact />
      <div id="bio-text">
        <p>Erin Schallmoser (she/her) lives in eastern Tennessee. She delights in moss, slugs, stones, wildflowers, small birds, and the moon, when she can see it. She's also a poetry/prose editor and staff contributor at The Aurora Journal, first reader at Pigeonholes, and editor-in-chief at <a href="https://gastropodalitmag.wixsite.com/main" target="_blank" rel="noreferrer">Gastropoda Lit Mag</a> and is currently working on various poetry projects.</p>
      </div>
    </div>
  )
}

export { Bio }
