import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_voluntarios from "../../constants/voluntarios";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../styles.css";
/* import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg"; */


function Voluntarios() {
  const [search, setSearch] = useState("");
  const [voluntarios, setVoluntarios] = useState(all_voluntarios);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const voluntPages = 50

  useEffect(() => {
    setPagination(calculateRange(all_voluntarios, voluntPages))
    setVoluntarios(sliceData(all_voluntarios, page, voluntPages))
  }, [page]);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = all_voluntarios.filter(
        (item) => {
          let vol = item ? item : undefined
          let volFirstName = vol ? vol.nome.split(" ")[0] : undefined
          let volSecName = vol ? vol.nome.split(" ")[vol.nome.split(" ").length -1] : undefined
          let searchedVol = volFirstName.toLowerCase().includes(search.toLowerCase()) || volSecName.toLowerCase().includes(search.toLowerCase())
          return searchedVol
        }
        );
        setPagination(calculateRange(search_results, voluntPages))
        setVoluntarios(sliceData(search_results, page, voluntPages))

    } else {
    setPagination(calculateRange(all_voluntarios, voluntPages))
    __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setVoluntarios(sliceData(all_voluntarios, new_page, voluntPages));
  };

  
  return (
    <div className="dashboard-content">
      <DashboardHeader />
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Lista de Voluntários</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="dashboard-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>NOME</th>
            <th>NASCIMENTO</th>
            <th>IDADE</th>
            <th>SEXO</th>
            <th>NÚMERO</th>
            <th>E-MAIL</th>
            <th>B</th>
            <th>D</th>
            <th>CdO</th>
          </thead>

          {voluntarios.length !== 0 ? (
            
            <tbody>
              {voluntarios.map((voluntarios, index) => (
                <tr key={index}>
                  <td>
                    <span>{voluntarios.id}</span>
                  </td>
                  <td>
                    <div>
                      <span>
                        {voluntarios.nome}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{voluntarios.nascimento}</span>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.idade}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.sexo}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.numero}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.email}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.b}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.d}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{voluntarios.cdo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {voluntarios.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Voluntarios;
