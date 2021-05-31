import React from 'react';

const Bio = () => {
  return (
    <div className="bio-container">
      <div id="bio-photo">
        <img src="profile.jpg" alt="Erin's Profile" />
      </div>
      <div id="bio-text">
        <p>Erin Schallmoser (she/her) lives in Bellingham, WA. She delights in moss, slugs, stones, wildflowers, small birds, and the moon, when she can see it. She's also a poetry/prose editor and staff contributor at The Aurora Journal, editor-in-chief at <a href="https://gastropodalitmag.wixsite.com/main" target="_blank" rel="noreferrer">Gastropoda Lit Mag</a> and is currently working on various flash fiction, creative nonfiction, and poetry projects.</p>
      </div>
    </div>
  )
}

export default Bio;