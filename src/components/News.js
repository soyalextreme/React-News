import React from "react";
import PropTypes from "prop-types";

const News = ({ item }) => {
  const { author, url, title, description, source, urlToImage } = item;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <>
      <div className="col s12 m6 l4">
        <div className="card">
          {image}
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
          </div>
          <small>{author}</small>
          <div className="card-action">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="waves-effect waves-light btn"
            >
              Ver noticia
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

News.propTypes = {
  item: PropTypes.object.isRequired
};

export default News;
