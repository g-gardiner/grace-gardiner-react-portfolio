import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioOverview extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter((item) => {
            return item.id !== portfolioItem.id;
          }),
        });
        return response.data;
      })
      .catch((error) => {
        console.log("handleDeleteClick error", error);
      });
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
        <body className="welcome">
          Select the <FontAwesomeIcon icon="minus-circle" /> to delete an item.
          Deleted items have no delay and can never be restored. To edit
          existing items, see <b>Edit</b>. To create a new item, see{" "}
          <b>Create New</b>.
        </body>
        <div className="portfolio-items-overview">
          <PortfolioSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
          />
        </div>
      </div>
    );
  }
}
