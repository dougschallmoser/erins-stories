import React from 'react';

const Publication = ({ link, title, source }) => {
  return (
    <div className="publication">
      {link ? 
        <>
          <a href={link} target="_blank" rel="noreferrer">"{title}"</a> / <em>{source}</em>
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