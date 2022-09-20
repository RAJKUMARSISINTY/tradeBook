import { Dropdown } from 'bootstrap';
import React from 'react';
import DropdownList from '../../atoms/dropdown/dropdown';
import TextArea from '../../atoms/text-area/text-area';
import AddList from '../../organisms/forms/add-list/add-list';
import AddTransactions from '../../organisms/forms/add-transactions/add-transactions';
import TransactionFilter from '../../organisms/forms/transaction-filter/transaction-filter';
const Exp = (props) => {
    const {
        ...otherProps
    } = props
    const addtranction = (e) => {
        e.preventDefault();
        console.log((e.target));

    }
    return (
        <div {...otherProps}>
            <div className="container-fluid mt-3">
            <h3>Sticky Navbar</h3>
            </div>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div className="container-fluid">
                <p className="navbar-brand">user name</p>
                <button>Logout</button>
            </div>
            </nav>
            <div className='container-fluid my-3 bg-primary row'>
                <div className='col-sm-4 pt-3 my-2 card bg-dark'>
                    <h1>Add expenses</h1>
                    <AddList/>
                    <AddTransactions/>
                    
                </div>
                <div className='col-sm-8 pt-3 my-2 card bg-dark'>
                    <div className='row pt-3 my-2'>
                    <div className=' col pt-3 my-2 card bg-primary'>
                        <h5>Filters</h5>
                        <TransactionFilter/>
                    </div>
                    <div className=' col pt-3 my-2 card bg-primary'>
                        <span>expense income result</span>
                    </div>
                    </div>
                    <div className='col pt-3 my-2 card bg-primary'>
                        <h2>Transactions</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>used for</td>
                                    <td> Price</td>
                                    <td>type</td>
                                    <td> Comment</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1/1/22</td>
                                    <td>Taxi</td>
                                    <td> 130</td>
                                    <td>exp</td>
                                    <td> abx</td>
                                </tr>
                                <tr>
                                    <td>1/1/22</td>
                                    <td>Taxi</td>
                                    <td> 130</td>
                                    <td>exp</td>
                                    <td> abx</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    
                </div>

            </div>


        </div>
    );
};

export default Exp;