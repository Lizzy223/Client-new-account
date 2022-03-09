import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import './Quote.css'
import {Link} from 'react-router-dom'

const Rows = [
    {id:1, name:'TenPlus Labs',  country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:2, name:'TenPlus Labs',  country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:3, name:'TenPlus Labs',  country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:4, name:'TenPlus Labs',  country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:5, name:'TenPlus Labs',  country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:6, name:'TenPlus Labs',  country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'}
]

const Table = (props) =>{
    const {id, name, country, state, customer, wallet_amount, order_amount}  = props;
   
       return(        

        <tr>
            <td>{id}</td>
            <td className='name'> {name}</td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{state}</td>
            <td>{customer}</td>
            <td>{wallet_amount}</td>
            <td><button class='btn-sm btn-primary' data-toggle="modal" data-target="#exampleModal">{order_amount}</button></td>
        </tr>
    )
    }




const Quote = (props) => {
    return (
        <main>            
             <div class="cards">
                     <h2>Quotes</h2>
                     <Link to='/request-form' class='float-right mt-n5 mr-4 btn btn-secondary bg-main text-light'>Request a quote</Link>
                     <hr/>
                     <div className=''>
                         <div className=''>
                            <div className=' container-fluid bg-white p-5'>                        
                                <div class='row '>                                
                                    <div class='col-md-12'>
                                        <div class='row'>
                                            <div class='col-md-8 mb-n5'>
                                                    <Tabs>
                                                        <TabList className='tab'>
                                                            <Tab id='tab'> 
                                                                <Link to='/' class=" active text-secondary">Dashboard/ </Link>
                                                            
                                                            </Tab>
                                                            <Tab>
                                                            <Link to='/billings' class="text-secondary">Billings/ </Link>
                                                            </Tab>
                                                            <Tab>
                                                                <Link to='/quote' class='text-secondary'>My Quote</Link>
                                                            </Tab>
                                                        </TabList>
                                                    </Tabs>
                                            </div>
                                            <div class='col-md-4'>
                                                <div className='card-notsingle bg-main text-light rounded border  text-secondary'>
                                                    <p>You have 1 unpaid invoicewith a total balance of</p>
                                                    <br/>
                                                    <h4>N2500.00 </h4>
                                                    <button type="button" class="btn btn-primary">Pay Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col-md-12'>
                                        <div class='row d-flex justify-content-between'>
                                            <div class='col-md-8 mt-n5'>
                                                            <table className=' bg-light pr-5 width-100 shadow text-blue table-responsive'>
                                                                <thead>
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>Name</th>
                                                                        <th>Name</th>
                                                                        <th>Country</th>
                                                                        <th>State</th>
                                                                        <th>Customer</th>
                                                                        <th>Wallet Amount</th>
                                                                        <th>Order Amount</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                {Rows.map((Row) =>
                                                            <Table key={Row.id} id={Row.id} email={Row.email} phone_number={Row.phone_number} company_total_orders={Row.company_total_orders} last_name={Row.last_name} active_orders={Row.active_orders} name={Row.name} country={Row.country} state={Row.state} customer={Row.customer} wallet_amount={Row.wallet_amount} order_amount={Row.order_amount} />
                                                            )} 
                                                                </tbody>
                                                            </table>
                                            </div>
                                            <div class='col-md-4'>
                                                <form>
                                                    <div class='form-group mt-5 mb-5'>
                                                        <input type="search" class='form-control' placeholder="Search here"/>
                                                        <small class='text-secondary'>Your quote history here with us</small>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {/*................................... modal................................. */}

                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header bg-grey text-light">
                                                <h5 class="modal-title" id="exampleModalLabel">#quote1582769</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            <table className=' bg-light p-2  shadow text-blue table-responsive'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Description</th>
                                                                <th>Amount</th>                                                                           
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Deluxe(25GB) Linux Shared Hosting -tenpluslabs.com(25/09/2021 - 26/10/2021)</td>
                                                                <td>2,300.00</td>                                                                           
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Deluxe(25GB) Linux Shared Hosting -tenpluslabs.com(26/10/2021 - 26/11/2021)</td>
                                                                <td>2,300.00</td>                                                                           
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Pay Now</button>
                                                <button type="button" class="btn btn-success">Negotiate</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*................................... end of modal................................. */}
                                </div>
                 </div>
                 </div>
            </div>
             </div>                
        </main>
    )
}

export default Quote

