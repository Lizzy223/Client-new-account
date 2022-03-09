import React from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
       
            <div className=''id="sidebar">
                {/* <input type="checkbox" name="" id="nav-toggle"/> */}
                <i className="las la-times" id="sidebarIcon" ></i>
                <div class="sidebar-brand">
                    <h2><span class="las la-compress-arrows-alt"></span>
                        <span>Dashboard</span>
                    </h2>
                </div>            
                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <NavLink to="/" ><span class="las la-igloo"></span>
                            <span>Overview</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="order" class=""><span class="las la-users"></span>
                            <span>Orders</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="ticket"><span class="las la-ship"></span>
                            <span>Ticket</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="pending-reviews"><span class="las la-clipboard-list"></span>
                            <span>Pending Reviews</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="coupon"><span class="las la-clipboard-list"></span>
                            <span>Coupon</span></NavLink>
                        </li>
                         <li>
                            <NavLink to="billings"><span class="las la-clipboard-list"></span>
                            <span>Billings</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="saved-items"><span class="las la-clipboard-list"></span>
                            <span>Saved Item</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="card"><span class="las la-clipboard-list"></span>
                            <span>Card</span></NavLink>
                        </li>
                        {/* <li>
                                <div class="dropdown">
                                    <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Billings
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <NavLink class="dropdown-item " to="quotes">Quotes</NavLink>
                                        <NavLink  class="dropdown-item  " to="invoice">Invoice</NavLink>
                                        <NavLink  class="dropdown-item " to="add-funds">Add Funds</NavLink>
                                    </div>
                                </div>
                            
                        </li> */}
                        <li>
                            <NavLink to="messages"><span class="las la-circle"></span>
                            <span>Messages</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="details"><span class="las la-receipt"></span>
                            <span>My Details</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="address-book"><span class="las la-circle"></span>
                            <span>Address Book</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="support"><span class="las la-clipboard-list"></span>
                            <span>Support</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="change-password"><span class="las la-circle"></span>
                            <span>Change Password</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="log-out"><span class="las la-circle"></span>
                            <span>Log out</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
       
    )
}

export default Sidebar
