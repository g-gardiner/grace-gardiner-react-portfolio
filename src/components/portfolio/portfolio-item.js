import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: "",
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        //* Starting with parens and an arrow function tells JS that the code should only run when the event (in this case, onMouseEnter) occurs.
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {/* <h1>{this.state.portfolioItemClass}</h1> - Use as a debugger to test functionality */}

        <div
          className={
            "portfolio-img-background " + this.state.portfolioItemClass
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")",
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}
