const Publication = ({ data }) => {

  const { link, title, source } = data;

  return (
    <div
      className="publication"
    >
      {link &&
        <>
          <div className="publicationTitle">
            <div id="pub-title-main">
              "{title}"
            </div>
            <div id="pub-title-source">
              {source}
            </div>
          </div>

            <div className="box">
              <div className="open"><a href={link} target="_blank" onClick={(e) => e.stopPropagation()} rel="noreferrer">open full story</a></div>
              <iframe id="preview-frame" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src={link} title="Preview Story" />
            </div> 
        </>
      }
    </div>
  )
}

export { Publication }