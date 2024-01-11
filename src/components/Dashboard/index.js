import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="main_container">
      <header className="dash_home_header">
        <h1>TABLEAU DE BORD</h1>
      </header>
      <section className="section_menu">
        <h2>UTILISATEURS</h2>
        <Link to="/dashboard/users">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </Link>
      </section>
      <section className="section_menu">
        <h2>CATEGORIES</h2>
        <Link to="/dashboard/categories">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </Link>
      </section>
      <section className="section_menu">
        <h2>ARTICLES</h2>
        <Link to="/dashboard/articles">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </Link>
      </section>
      <section className="section_menu">
        <h2 className="adresses_title">ADRESSES</h2>
        <i>
          <FontAwesomeIcon icon={faPenToSquare} />
        </i>
      </section>
    </main>
  );
}

export default Dashboard;
