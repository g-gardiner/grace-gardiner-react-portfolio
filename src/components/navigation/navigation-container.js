import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
// HOCs always start with a lowercase letter.

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("error signing out", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/portfolio-manager", "Create New")
          : null}

        {false ? <button>Add Blog</button> : null}

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/portfolio-sidebar-list", "Manager")
          : null}

        {false ? <button>Add Blog</button> : null}
      </div>

      <div className="right-side">
        GRACE GARDINER
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>Bye!</a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
