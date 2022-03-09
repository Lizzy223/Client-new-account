import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import { Link } from 'react-router-dom';

const Rows = [
    {id:1, department:'0', subject:'Algeria', status:'Okalhoma', lastUpdate:'chief', order_amount:'view'},
    {id:2, department:'0', subject:'Algeria', status:'Okalhoma', lastUpdate:'chief',  order_amount:'view'},
    {id:3, department:'0', subject:'Algeria', status:'Okalhoma', lastUpdate:'chief', order_amount:'view'},
    {id:4, department:'0', subject:'Algeria', status:'Okalhoma', lastUpdate:'chief', order_amount:'view'},
    {id:5, department:'0', subject:'Algeria', status:'Okalhoma', lastUpdate:'chief', order_amount:'view'},
    {id:6, department:'0', subject:'Algeria', status:'Okalhoma', lastUpdate:'chief', order_amount:'view'}
]

const nav = (route)=>{
    window.location.assign(route)
}

const Table = (props) =>{
    const { department, subject, status, lastUpdate, order_amount }  = props;
   
       return(        
        <tr  className='cursor-pointer'>         
            <td>{department}</td>
            <td>{subject}</td>
            <td>{status}</td>
            <td>{lastUpdate}</td>
            <td><Link to='/support/support-ticket/support-ticket-message' class='btn-sm btn-primary' >{order_amount}</Link></td>
        </tr>
    )
}





const SupportMainPage = () => {
    return (
        <main>
            <div className='cards'>
            <h2>Support</h2>
                <hr/>
                {/* you have no order */}

                {/* <div className='no-orders'>
                    <p>You have no message yet!</p>
                    <p>All your message will be placed here for you to access their status anytime.</p>
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
                                                    <h2 class='mb-5'>My Support</h2>
                                                    <Tabs>
                                                        <TabList className='tab'>
                                                            <Tab id='tab'> 
                                                                <p class=" active text-secondary"> </p>
                                                            
                                                            </Tab>
                                                            <Tab>
                                                            <p class="text-secondary"> </p>
                                                            </Tab>
                                                            <Tab>
                                                                <p class='text-secondary'></p>
                                                            </Tab>
                                                        </TabList>

                                                        <TabPanel>
                                                            <div className='col-8'>
                                                            {/* width-70 css is in quote/quote.css */}
                                                                <table className=' bg-light p-5  shadow text-blue table-hover table-responsive' id='table'>
                                                                    <thead>
                                                                        <tr>                                                                            
                                                                            <th>ID</th>
                                                                            <th>Date</th>
                                                                            <th>Message Title</th>
                                                                            <th>status</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    
                                                                    {Rows.map((Row) =>
                                                                <Table key={Row.id} id={Row.id} department={Row.department} order_amount={Row.order_amount} subject={Row.subject} status={Row.status} lastUpdate={Row.lastUpdate} />
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
                                        <div className=' bg-primary p-2 btn text-light rounded '>
                                            <Link to='/support/support-ticket/submit-ticket' class='text-light'>Open Ticket</Link>
                                            <br/>
                                            {/* <h4>N2500.00 </h4> */}
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

export default SupportMainPage