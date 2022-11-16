import React from "react";
import { Link } from "react-router-dom";

import '../components/cocktail-components/Cocktail.css'


export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>hoppsan! det är en återvändsgränd</h1>
        <Link to="/" className="btn btn-primary">
          tillbaka
        </Link>
      </div>
    </section>
  );
}