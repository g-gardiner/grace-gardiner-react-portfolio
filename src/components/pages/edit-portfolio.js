import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioSidebarList from "../portfolio/portfolio-editor-menu";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit: {},
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }

  clearPortfolioToEdit() {
    this.setState(new Promise(function(resolve, reject) {
      portfolioToEdit: {}
    }))
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem,
    })
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

  handleSuccessfulFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getPortfolioItems() {
    axios
      .get(
        "https://gracegardiner.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true,
        }
      )
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
      <div className="portfolio-manager-wrapper">
        <body className="welcome">
          Select an item to edit. To oversee or delete existing items, see{" "}
          <b>Manager</b>. To create a new item, see <b>Create New</b>.
        </body>
        <div className="right-column">
          <PortfolioSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
            handleEditClick={this.handleEditClick}
          />
        </div>

        <div className="left-column">
          <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />
        </div>
      </div>
    );
  }
}