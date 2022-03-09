import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';

import { Link } from 'react-router-dom'

const Rows = [
    {id:1, email:'05-01-2021', phone_number:'0', wallet_amount:'paid', order_amount:'view'},
    {id:2, email:'05-01-2021', phone_number:'0', wallet_amount:'not paid', order_amount:'view'},
    {id:3, email:'05-01-2021', phone_number:'0', wallet_amount:'paid', order_amount:'view'},
    {id:4, email:'05-01-2021', phone_number:'0', wallet_amount:'paid', order_amount:'view'},
    {id:5, email:'05-01-2021', phone_number:'0', wallet_amount:'not paid', order_amount:'view'},
    {id:6, email:'05-01-2021', phone_number:'0', wallet_amount:'paid', order_amount:'view'}
]

const Table = (props) =>{
    const {id, email,phone_number, wallet_amount, order_amount}  = props;
   
       return(        

        <tr>
            <td>{id}</td>           
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>{wallet_amount}</td>
            <td><button class='btn-sm btn-primary' data-toggle="modal" data-target="#exampleModal">{order_amount}</button></td>
        </tr>
    )
    }




const Invoice = (props) => {
    return (
        <main>            
             <div class="cards">
                     {/* <h2>Quotes</h2>
                     <hr/> */}
                    {/* <div className=''>
                         <div className=''>
                            <div className=' container-fluid bg-white p-5'>                        
                                <div class='row '> */}
                                 {/* right hand container */}
                                    {/* <div class='width-30'>                                        
                                        <div className='card-notsingle bg-primary text-light rounded border  text-secondary'>
                                            <p>You have 1 unpaid invoicewith a total balance of</p>
                                            <br/>
                                            <h4>N2500.00 </h4>
                                        </div>
                                    </div> */}
                                    {/* left hand container */}
                                    {/* <div class='width-70'>
                                        <div class='d-flex '>
                                                <div class='d-block'>
                                                    <h2 class='mb-5'>My Invoice</h2>
                                                    <Tabs>
                                                        <TabList className='tab'>
                                                            <Tab id='tab'> 
                                                                <p class=" active text-secondary">Portal home/ </p>
                                                            
                                                            </Tab>
                                                            <Tab>
                                                            <p class="text-secondary">Client Area/ </p>
                                                            </Tab>
                                                            <Tab>
                                                                <p class='text-secondary'>My Quote</p>
                                                            </Tab>
                                                        </TabList>

                                                        <TabPanel>
                                                            <div className='col-8'>
                                                                <table className=' bg-light p-5 width-100 shadow text-blue table-responsive'>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>ID</th>
                                                                            <th>Name</th>
                                                                            <th>Last Name</th>
                                                                            <th>Email</th>
                                                                            <th>Phone Number</th>
                                                                            <th>Company Total Order</th>
                                                                            <th>Date Published</th>
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
                                                        </TabPanel>
                                                    </Tabs>
                                                </div>
                                                <form>
                                                    <div class='form-group mb-5'>
                                                        <input type="search" class='form-control' placeholder="Search here"/>
                                                        <small class='text-secondary'>Your invoice history here with us</small>
                                                    </div>
                                                </form> */}



                                                {/*.................................... modal ......................................*/}

                                                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header bg-grey">
                                                            <h5 class="modal-title" id="exampleModalLabel">#quote1582769</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            ...
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Pay Now</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                {/*................................... end of modal................................. */}
                                            
                                        {/* </div>
                                    </div>
                                </div>
                 </div>
                 </div>
            </div> */}
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-md-12 '>
                        <div class='row'>
                            <div class='col-md-12 p-4 shadow'>
                               <h3> Invoice</h3>
                               <div class='float-right d-flex mt-n3'>
                                    <p>You have 1 invoice with a total balance of: &nbsp; </p>
                                    <br/>
                                    <h4>N2500.00 </h4>
                                    <button type="button" class="btn-sm ml-3 btn-primary">Pay Now</button>
                               </div>                               
                            </div>
                            <div class='col-md-4'>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-12 p-3 mt-2'>
                        <div class='row'>
                            <div class='col-md-8'>
                                <div class='d-block mb-n5'>
                                    <Tabs>
                                        <TabList className='tab'>
                                            <Tab id='tab'> 
                                                <Link to='/' class=" active text-secondary">Dashboard/ </Link>
                                            
                                            </Tab>
                                            <Tab>
                                            <Link to='/billings' class="text-secondary">Bilings/ </Link>
                                            </Tab>
                                            <Tab>
                                                <Link to='/invoice' class='text-secondary'>My Invoice</Link>
                                            </Tab>
                                        </TabList>
                                    </Tabs>
                                </div>
                            </div>
                            <div class='col-md-4'>
                                <form>
                                    <div class='form-group mb-5'>
                                        <input type="search" class='form-control' placeholder="Search here"/>
                                        <small class='text-secondary'>Your invoice history here with us</small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-12 '>
                        
                            <div className='col-12'>
                                <table className=' bg-light pl-5 width-100 shadow text-blue table-responsive'>
                                    <thead>
                                        <tr>
                                            <th>Invoice</th>
                                            <th>Invoice Date</th>
                                            <th>Due Date</th>
                                            <th>Total</th>
                                            <th>status</th>                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Rows.map((Row) =>
                                <Table key={Row.id} id={Row.id} email={Row.email} phone_number={Row.phone_number}  wallet_amount={Row.wallet_amount} order_amount={Row.order_amount} />
                                )} 
                                    </tbody>
                                </table>
                            </div>
                        
                    </div>
                    {/*.................................... modal ......................................*/}

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header bg-grey">
                                <h5 class="modal-title" id="exampleModalLabel">#invoice1582769</h5>
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
                            </div>
                            </div>
                        </div>
                    </div>

                    {/*................................... end of modal................................. */}
                </div>
            </div>
             </div>                
        </main>
    )
}

export default Invoice

