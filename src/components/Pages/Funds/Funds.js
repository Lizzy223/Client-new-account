import React, {useState} from 'react'
import './Funds.css'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import TextField from '@mui/material/TextField';

const Funds = (props) => {
    const [open, setOpen] = React.useState(false);
    const [palOpen, setPalOpen] = React.useState(false);
    
    return (
        <main>            
             <div class="cards ">
                     <h2>Add Funds</h2>
                     <hr/>
                     <div className=''>
                         <div className=''>
                            <div className=' container-fluid bg-white p-5'>                        
                                <div class='row '>
                                 
                                    {/* left hand container */}
                                    <div class='width-70'>
                                        <div class='d-flex '>
                                                <div class='d-block'>
                                                    <Tabs>
                                                    <TabList className='tab'>
                                                        <Tab id='tab'> 
                                                            <Link to='/' class=" active text-secondary">Dashboard/ </Link>
                                                        
                                                        </Tab>
                                                        <Tab>
                                                        <Link to='/billings' class="text-secondary">Bilings/ </Link>
                                                        </Tab>
                                                        <Tab>
                                                            <Link to='/add-fund' class='text-secondary'>My Wallet</Link>
                                                        </Tab>
                                                    </TabList>

                                                        <TabPanel>
                                                            <div className='col-8 bg-white p-5'>
                                                                <form class='text-center m-auto'>
                                                                    <div class='mt-3 mb-4 d-flex'>
                                                                        <p class='text-secondary'>Request Payout:</p>
                                                                        <p class='btn btn-secondary bg-main ml-2' data-toggle="modal" data-target="#exampledal">click</p>
                                                                    </div>
                                                                    <div class="form-group input-group d-flex">
                                                                        <p class='text-secondary'>Payment Method:</p>
                                                                        <select class="form-control-lg select border-grey ml-2" id="exampleFormControlSelect1">
                                                                            <option class='p-2 option'>Paystack (Subscription)</option>
                                                                            <option class='p-2 option'>2</option>
                                                                            <option class='p-2 option'>3</option>
                                                                            <option class='p-2 option'>4</option>
                                                                            <option class='p-2 option'>5</option>
                                                                        </select>
                                                                    </div>
                                                                    
                                                                    
                                                                    <br/>
                                                                    <div class='d-block'>
                                                                        <p class='text-secondary text-left'>Amount to Add: </p>
                                                                        <div class='d-flex form-group'>
                                                                            <button class='funds-button form-control btn text-bold p-2'>N15</button>
                                                                            <button class='funds-button form-control btn text-bold p-2'>N50</button>
                                                                            <button class='funds-button form-control btn text-bold p-2'>N75</button>
                                                                            <button class='funds-button form-control btn text-bold p-2'>N100</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class='form-group d-flex'>
                                                                        <input class='form-control' type='search' placeholder=''/>
                                                                        <button class='fund-blue-button ml-2 btn-primary'> Add Fund</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </TabPanel>
                                                    </Tabs>
                                                </div>
                                                


                                                {/*.................................... modal ......................................*/}

                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
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
                                                            <button  class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button  class="btn btn-primary">Pay Now</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*................................... end of modal................................. */}

                                                 {/*....................................Request payout modal ......................................*/}

                                                 <div class="modal fade" id="exampledal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                        <div class="modal-header p-2">
                                                          
                                                            <button  class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class='container-fluid'>
                                                                <div class='row align-items-center justify-content-center'>
                                                                    <div class='col-md-6'>
                                                                    <button  class='btn btn-secondary bg-main' onClick={() => setOpen(true)}>
                                                                        Paystack
                                                                    </button>
                                                                    {open && (
                                                                        <TrapFocus open>
                                                                        <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
                                                                            <form>
                                                                                <label>
                                                                                Bank Name: <TextField id="standard-basic" label="Standard" variant="standard" />
                                                                                Account Number: <TextField id="standard-basic" label="Standard" variant="standard" />
                                                                                Amount: <TextField id="standard-basic" label="Standard" variant="standard" />
                                                                                <input class='btn btn-secondary bg-main d-block mt-2' type='submit' />
                                                                                </label>
                                                                            </form>
                                                                            <br />
                                                                            <button class='btn btn-secondary bg-main' onClick={() => setOpen(false)}>
                                                                            Close
                                                                            </button>
                                                                        </Box>
                                                                        </TrapFocus>
                                                                    )}
                                                                    <button  class='btn btn-secondary bg-main' onClick={() => setPalOpen(true)}>
                                                                        Paypal
                                                                    </button>
                                                                    {palOpen && (
                                                                        <TrapFocus palOpen>
                                                                            <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
                                                                                <form>
                                                                                    <label>
                                                                                        <TextField id="standard-basic" label="Standard" variant="Bank Name" />
                                                                                        <TextField id="standard-basic" label="Standard" variant="Account Number" />
                                                                                        <TextField id="standard-basic" label="Standard" variant="Amount" />
                                                                                    </label>
                                                                                    <input class='btn btn-secondary bg-main d-block ' type='submit' />
                                                                                </form>
                                                                                    
                                                                                    <button class='btn btn-secondary' onClick={() => setPalOpen(false)}> Close  </button>
                                                                                
                                                                            </Box>
                                                                        </TrapFocus>
                                                                    )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button  class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button  class="btn btn-primary">Pay Now</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*................................... end of modal................................. */}
                                            
                                        </div>
                                    </div>
                                    {/* right hand container */}
                                    <div class='width-30'>                                        
                                        <div className='card-notsingle bg-main text-light rounded border  text-secondary'>
                                            <p>You have a total balance of</p>
                                            <br/>
                                            <h4>N2500.00 </h4>
                                            <button type="button" class="btn btn-primary">Withdraw</button>
                                        </div>
                                        <form>
                                                    <div class='form-group mb-5 mt-4'>
                                                        <input type="search" class='form-control' placeholder="Search here"/>
                                                        <small class='text-secondary'>Deposite money in advance</small>
                                                    </div>
                                                </form>

                                    </div>
                                </div>
                 </div>
                 </div>
            </div>
             </div>                
        </main>
    )
}

export default Funds

