import React from "react";

const NewsItem = ({ title, url, urlToImage, description }) => (
  <li>
    <h3>{title}</h3>
    <img src={urlToImage} alt="xxx" width="350" />
    <p>{description}</p>
    <a href={url}>Read more</a>
  </li>
);

export default NewsItem;