import { Contact } from './Contact';

const Bio = ({ setMain }) => {
  return (
    <div>
      <img src="profile.jpg" id="bio-photo" alt="Erin's Profile" />
      <Contact />
      <div id="bio-text">
        <p>Erin Schallmoser (she/her) lives in Bellingham, WA. She delights in moss, slugs, stones, wildflowers, small birds, and the moon, when she can see it. She's also a poetry/prose editor and staff contributor at The Aurora Journal, editor-in-chief at <a href="https://gastropodalitmag.wixsite.com/main" target="_blank" rel="noreferrer">Gastropoda Lit Mag</a> and is currently working on various flash fiction, creative nonfiction, and poetry projects.</p>
      </div>
    </div>
  )
}

export { Bio }