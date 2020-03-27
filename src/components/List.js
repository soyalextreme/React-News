import React from "react";
import News from "./News";
import PropTypes from "prop-types";

const List = ({ news }) => {
  return (
    <div className="row">
      {news.map(item => (
        <News key={item.url} item={item} />
      ))}
    </div>
  );
};

List.propTypes = {
  news: PropTypes.array.isRequired
};

export default List;
