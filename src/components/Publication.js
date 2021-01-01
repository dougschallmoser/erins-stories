import React, { useState } from 'react';

const Publication = ({ link, title, source }) => {

  const [displayPreview, setDisplayPreview] = useState(false)

  const handleClick = () => {
    setDisplayPreview(!displayPreview)
  }

  const handleClose = () => {
    setDisplayPreview(false)
  }

  return (
    <div className="publication">
      {link ? 
        <>
          <span className="publication-title" onClick={handleClick}>"{title}"</span> / <em>{source}</em>
          {displayPreview && 
            <div className="box">
              <div className="close" onClick={handleClose}>close preview</div>
              <div className="open"><a href={link} target="_blank" rel="noreferrer">open story</a></div>
              <iframe id="preview-frame" src={link} title="Preview Story" />
            </div> 
        }
        </>
        : 
        <>
          "{title}" / <em>{source}</em> / <span className="forthcoming">forthcoming</span>
        </>
}
    </div>
  )
}

export default Publication;