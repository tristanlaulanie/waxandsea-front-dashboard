import React from "react";
// CSS
import "./AccueilDashboard.css";
import "./AccueilDashboardResponsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AccueilDashboard() {
  return (
    <main className="main_container">
      <section className="dash_home_header">
        <h1 className="dashboard_title">TABLEAU DE BORD</h1>
      </section>
      <section className="section_menu">
        <h2 className="titles">UTILISATEURS</h2>
        <Link to="/dashboard/users" className="dashboard_link-style">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </Link>
      </section>
      <section className="section_menu">
        <h2 className="titles">CATEGORIES</h2>
        <Link to="/dashboard/categories" className="dashboard_link-style">
          <i>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </i>
        </Link>
      </section>
      <section className="section_menu">
        <h2 className="titles">ARTICLES</h2>
        <Link to="/dashboard/articles" className="dashboard_link-style">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </Link>
      </section>
      <section className="section_menu">
        <h2 className="titles">ADRESSES</h2>
        <Link to="/dashboard/adresses" className="dashboard_link-style">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </Link>
      </section>
    </main>
  );
}

export default AccueilDashboard;
