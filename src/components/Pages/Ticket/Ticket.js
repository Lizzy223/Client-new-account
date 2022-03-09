import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Ticket = () => {
    return (
        <main>
            <div className='cards'>
            <h2>Ticket</h2>
                <hr/>
                    <Tabs>
                        <TabList className='order-tab'>
                            <Tab id='tab'> 
                                <button class=" active">Open Ticket (0)</button>
                            
                            </Tab>
                            <Tab>
                            <button class="">Closed Ticket (0)</button>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='status'>Delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                            </div>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='status'>Delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                            </div>
                            <Stack spacing={2}>
                                <Pagination count={10} variant="outlined" />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='n-status'>Not-delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                            </div>
                            <div className='order-container mb-3'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='n-status'>Not-delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                            </div>
                            <Stack spacing={2}>
                                <Pagination count={3} variant="outlined" />
                            </Stack>
                        </TabPanel>
                    </Tabs>


                {/* <div className='no-orders'>
                    <p>You have Ticket yet!</p>
                    <p>All your Ticket will be placed here for you to access their state anytime.</p>
                    <button>Continue Shopping</button>
                </div> */}
            </div>
        </main>
    )
}

export default Ticket
