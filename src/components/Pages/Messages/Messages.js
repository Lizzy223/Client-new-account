import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import './Messages.css'
import { Link } from 'react-router-dom';

const Rows = [
    {id:1, active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:2, active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:3, active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:4, active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:5, active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'},
    {id:6, active_orders:'0', country:'Algeria', state:'Okalhoma', customer:'chief', wallet_amount:'N900,000', order_amount:'view'}
]

const Table = (props) =>{
    const {id, active_orders, country, state, customer, wallet_amount, order_amount}  = props;
   
       return(        

        <tr>
            <td>{id}</td>            
            <td>{active_orders}</td>
            <td>{country}</td>
            <td>{state}</td>
            <td>{customer}</td>
            <td>{wallet_amount}</td>
            <td><Link to='/messages/inbox' class='btn-sm btn-primary' >{order_amount}</Link></td>
        </tr>
    )
    }





const Messages = () => {
    return (
        <main>
            <div className='cards'>
            <h2>Messages</h2>
                <hr/>
                {/* you have no order */}

                {/* <div className='no-orders'>
                    <p>You have no message yet!</p>
                    <p>All your message will be placed here for you to access their state anytime.</p>
                    <button>Continue Shopping</button>
                </div> */}
                <div className=''>
                         <div className=''>
                            <div className=' container-fluid bg-white p-5'>                        
                                <div class='row '>

                                 {/* ................................ left hand container ................................. */}
                                    
                                    <div class='width-70'>
                                        <div class='d-flex '>
                                                <div class='d-block'>
                                                    <h2 class='mb-5'>My Messages</h2>
                                                    <Tabs>
                                                        <TabList className='tab'>
                                                            <Tab id='tab'> 
                                                                <p class=" active text-secondary">Portal home/ </p>
                                                            
                                                            </Tab>
                                                            <Tab>
                                                            <p class="text-secondary">Client Area/ </p>
                                                            </Tab>
                                                            <Tab>
                                                                <p class='text-secondary'>My Messages</p>
                                                            </Tab>
                                                        </TabList>

                                                        <TabPanel>
                                                            <div className='col-8'>
                                                            {/* width-70 css is in quote/quote.css */}
                                                                <table className=' bg-light p-5  shadow text-blue table-responsive' id='table'>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>ID</th>
                                                                            <th>Date</th>
                                                                            <th>Message Title</th>
                                                                            <th>State</th>
                                                                            <th>Customer</th>
                                                                            <th>Wallet Amount</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {Rows.map((Row) =>
                                                                <Table key={Row.id} id={Row.id} active_orders={Row.active_orders} country={Row.country} state={Row.state} customer={Row.customer} wallet_amount={Row.wallet_amount} order_amount={Row.order_amount} />
                                                                )} 
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </TabPanel>
                                                    </Tabs>
                                                </div>
                                               



                                                {/*.................................... modal ......................................*/}

                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                </div>

                                                {/*................................... end of modal................................. */}
                                            
                                        </div>
                                    </div>
                                    {/*............................ end of left hand container .............................................*/}

                                    {/*............................ right hand container .............................................*/}
                                    <div class='width-30 ml-5'>                                        
                                        <div className='card-notsingle bg-main text-light rounded border  text-secondary'>
                                            <p>You have 1 unpaid message a total balance of</p>
                                            <br/>
                                            <h4>N2500.00 </h4>
                                        </div>
                                    </div>
                                    {/*............................ end of right hand container .............................................*/}
                                    
                                </div>
                 </div>
                 </div>
            </div>
            </div>
        </main>
    )
}

export default Messages