import React from "react";
import DashboardHeader from "../../components/DashboardHeader";

import "../styles.css";

function NewVoluntario() {

  return (
    <div className="dashboard-content">
      <DashboardHeader />
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Novo Voluntario</h2>
        </div>
        <form action="/">
          <h4>Nome do Maluco: </h4>
          <div className="dashboard-content-search">
            <input type="text" className="dashboard-content-input" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewVoluntario;
