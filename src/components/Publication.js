import React, { useState } from 'react';

const Publication = ({ link, title, source }) => {

  const [displayPreview, setDisplayPreview] = useState(false)

  const handleClick = () => {
    setDisplayPreview(!displayPreview)
  }

  const handleHover = (event) => {
    let div = event.currentTarget;

    if (!link && div.className === "publication") {
      div.className = "publication-hover"
    } else if (div.className === "publication") {
      div.className = "publication-hover2"
    } else {
      div.className = "publication"
    }
  }

  return (
    <div
      className="publication"
      onClick={link ? handleClick : null}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        cursor: link ? "pointer" : "default",
        background: displayPreview ? "#00b49628" : null
      }}
    >
      {link ? 
        <>
          <span className="publication-title">
            "{title}"
          </span> / <em>{source}</em>

          {displayPreview && 
            <div className="box">
              <div className="open"><a href={link} target="_blank" onClick={(e) => e.stopPropagation()} rel="noreferrer">open full story</a></div>
              <iframe id="preview-frame" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src={link} title="Preview Story" />
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