import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="row pr-5 pl-5 pt-2 pb-2 border">
      <div className="col-md-6">
        <Link to="/">Home</Link>
      </div>
      <div className="col-md-6 d-flex justify-content-end">
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  );
}

export default Header;
