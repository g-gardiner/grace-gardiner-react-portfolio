import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <h2>
        🤔 That page doesn't exist here, or you're not allowed to access it !
      </h2>
      See if you can find what you're looking for{" "}
      <Link to="/">back on the home page,</Link> or, if you're trying to access
      an <b>admin access only 🔒</b> page, make sure you've logged in.
    </div>
  );
}
