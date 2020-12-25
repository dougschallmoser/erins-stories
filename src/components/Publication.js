import React from 'react';

const Publication = ({ title, source, url, time }) => {
  return (
    <>
    <div className="publication-item">
      <div className="publication-content">
        <div className="publication-title">{title.toUpperCase()}</div>
        <div className="publication-source">{source}</div>
        <div>
          {url ? <a href={url} target="_blank" rel="noreferrer">Read Story</a> : 'Coming Soon'}
        </div>
        <div className="publication-time">{time}</div>
      </div>
      <div className="publication-item-overlay" />
    </div>
    </>
  )
}

export default Publication;