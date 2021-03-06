import React, { Component } from "react";
import axios from "axios";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
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
          // ? allows for unique parameters other than default
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


      <div className="editor">
<<<<<<< HEAD

<body className="welcome"> Create a new item using the form below. To delete an existing item, see <b>Manager</b>. To edit an existing item, see <b>Edit</b>.</body>

=======
>>>>>>> parent of 5849f1d... Commit for 9/2/20: added new features, pages, imports, and styles.
        <div className="left-column-editor">
          <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>
      </div>
    );
  }
}
