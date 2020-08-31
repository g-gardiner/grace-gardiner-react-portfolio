import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  getPortfolioItems() {
    axios
      .get("https://gracegardiner.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        this.setState({
          data: response.data.portfolio_items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="filter-buttons">
          <button onClick={() => this.handleFilter("Coding Experience")}>
            Coding Experience
          </button>
          <button onClick={() => this.handleFilter("Work Experience")}>
            Work Experience
          </button>
          <button onClick={() => this.handleFilter("Passion Projects")}>
            Passion Projects
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
