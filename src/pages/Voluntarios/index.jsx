import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import all_voluntarios from '../../constants/voluntarios';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';

function Voluntarios () {
    const [search, setSearch] = useState('');
    const [voluntarios, setVoluntarios] = useState(all_voluntarios);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_voluntarios, 5));
        setVoluntarios(sliceData(all_voluntarios, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = voluntarios.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase())
            );
            setVoluntarios(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setVoluntarios(sliceData(all_voluntarios, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            <DashboardHeader/>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Lista de Voluntários</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                    </thead>

                    {voluntarios.length !== 0 ?
                        <tbody>
                            {voluntarios.map((voluntarios, index) => (
                                <tr key={index}>
                                    <td><span>{voluntarios.id}</span></td>
                                    <td>
                                        <div>
                                            <span>{voluntarios.first_name} {voluntarios.last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>{voluntarios.date}</span></td>
                                    <td>
                                        <div>
                                            {voluntarios.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : voluntarios.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : voluntarios.status === 'Refunded' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{voluntarios.status}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {voluntarios.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Voluntarios;