import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import './order.css'
import img from '../../../assets/lana.jpg'
import {Link} from 'react-router-dom'





const Order = () => {
    

    return (
        <main>            
            <div class="cards">
                    <h2>Order</h2>
                    <hr/>                   
                    <Tabs>                    
                        <TabList className='order-tab'>
                            <Tab id='tab'> 
                                <button class="mt-2 active">Open Orders (0)</button>                            
                            </Tab>
                            <Tab>
                            <button class="mt-2">Closed Orders (0)</button>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div class='p-3'>
                                <div className='order-container'>
                                    <div className='order-image'>
                                        <img src={img} alt='' class='img-responsive img-fluid' width='' height='' />
                                    </div>
                                    <div className='order-details'>
                                        <p>100000mah ultra slim fast charging power banks</p>
                                        <p>Order no: 34561234</p>
                                        <p className='status'>Delivered</p>
                                        <p> on 24-09-19</p>
                                    </div>
                                    <div className='order-button'>
                                        <button ><Link to='/order/chart'>View Order</Link></button>
                                    </div>
                                </div>
                                <div className='order-container'>
                                    <div className='order-image'>
                                        <img src={img} alt='' class='img-responsive img-fluid' width='' height='' />
                                    </div>
                                    <div className='order-details'>
                                        <p>100000mah ultra slim fast charging power banks</p>
                                        <p>Order no: 34561234</p>
                                        <p className='status'>Delivered</p>
                                        <p> on 24-09-19</p>
                                    </div>
                                    <div className='order-button'>
                                        <button ><Link to='/order/chart'>View Order</Link></button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class='p-3'>
                                <div className='order-container'>
                                    <div className='order-image'>
                                    <img src={img} alt='' class='img-responsive img-fluid' width='' height='' />
                                    </div>
                                    <div className='order-details'>
                                        <p>100000mah ultra slim fast charging power banks</p>
                                        <p>Order no: 34561234</p>
                                        <p className='n-status'>Not-delivered</p>
                                        <p> on 24-09-19</p>
                                    </div>
                                    <div className='order-button'>
                                        <button class='disabled' disabled>View Order</button>
                                    </div>
                                </div>
                                <div className='order-container'>
                                    <div className='order-image'>
                                        <img src={img} alt='' class='img-responsive img-fluid' width='' height='' />
                                    </div>
                                    <div className='order-details'>
                                        <p>100000mah ultra slim fast charging power banks</p>
                                        <p>Order no: 34561234</p>
                                        <p className='n-status'>Not-delivered</p>
                                        <p> on 24-09-19</p>
                                    </div>
                                    <div className='order-button'>
                                        <button  class='btn-disabled' disabled>View Order</button>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>

                    
            </div>
        </main>
    )
}


export default Order
