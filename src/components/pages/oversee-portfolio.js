import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioOverview extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };
  }

  getPortfolioItems() {
    axios
      .get("https://gracegardiner.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      })
      .catch((error) => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="items-container">
        <div className="portfolio-items-overview">
          <PortfolioSidebarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}
