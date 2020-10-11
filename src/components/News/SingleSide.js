import React from "react";

const SingleSide = ({ item }) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank">
      <div className="secion">
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
  </div>
);

export default SingleSide;
