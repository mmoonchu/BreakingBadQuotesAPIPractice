import React from "react";
import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Breaking Bad quotes</div>
      </Link>

      <Link to="/currencies">
        <div>Characters</div>
      </Link>
    </div>
  );
};