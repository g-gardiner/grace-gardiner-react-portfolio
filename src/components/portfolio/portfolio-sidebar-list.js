import React from "react";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div className="portfolio-item-thumb">
        <h1 className="title">
          {portfolioItem.name}
          {portfolioItem.id}
        </h1>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
