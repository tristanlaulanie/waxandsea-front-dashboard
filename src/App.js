import React from "react";
// COMPOSANTS
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import Connexion from "./components/Connexion";
import Panier from "./components/Panier";
import PanierProduit from "./components/Panier/PanierProduit";
import PanierCoordonnees from "./components/Panier/PanierCoordonnees";
import PanierLivraison from "./components/Panier/PanierLivraison";
import PanierPaiement from "./components/Panier/PanierPaiement";
import Paiement from "./components/Paiement";
import Enregistrement from "./components/Enregistrement";
import Dashboard from "./components/Dashboard";
import UsersTable from "./components/Dashboard/UsersTable";
import SetUser from "./components/Dashboard/UsersTable/SetUser";
import AddUser from "./components/Dashboard/UsersTable/AddUser";
import Categories from "./components/Dashboard/Categories";
import SetCategory from "./components/Dashboard/Categories/SetCategory";
import Articles from "./components/Dashboard/Articles";
import SetArticle from "./components/Dashboard/Articles/SetArticle";
import AddArticle from "./components/Dashboard/Articles/AddArticle";
import Adresses from "./components/Dashboard/Adresses";
import SetAdresses from "./components/Dashboard/Adresses/SetAdresses";

import Footer from "./components/Footer";
// CSS
import "./App.css";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/panier/produit" element={<PanierProduit />} />
          <Route path="/panier/coordonnees" element={<PanierCoordonnees />} />
          <Route path="/panier/livraison" element={<PanierLivraison />} />
          <Route path="/panier/paiement" element={<PanierPaiement />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/enregistrement" element={<Enregistrement />} />
          <Route path="/contact" element= {<Contact />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<UsersTable />} />
          <Route path="/dashboard/users/set-user" element={<SetUser />} />
          <Route path="/dashboard/users/add-user" element={<AddUser />} />
          <Route path="/dashboard/categories" element={<Categories />} />
          <Route path="/dashboard/categories/set" element={<SetCategory />} />
          <Route path="/dashboard/articles" element={<Articles />} />
          <Route path="/dashboard/articles/set" element={<SetArticle />} />
          <Route path="/dashboard/articles/add" element={<AddArticle />} />
          <Route path="/dashboard/adresses" element={<Adresses />} />
          <Route path="/dashboard/adresses/set" element={<SetAdresses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
