import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div className="portfolio-item-thumb">
        <h1 className="title">
          <div>{portfolioItem.name}</div>
          <div className="images-wrapper">
            <img src={portfolioItem.thumb_image_url} />
            <img src={portfolioItem.banner_image_url} />
          </div>

          <a
            className="delete-icon"
            onClick={() => props.handleDeleteClick(portfolioItem)}
          >
            <FontAwesomeIcon icon="minus-circle" />
          </a>
        </h1>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
