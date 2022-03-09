import React, { useState } from 'react'
import './Navbar.css';
import img from '../../assets/lana.jpg'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const onShow = () => setShow(!show);

    return(
        <header className=''>
             <div class='w-100 align-items-center mt-n5'>
                <label for="nav-toggle" >
                    <span class="las la-bars" ></span>
                </label>
                <div class='d-flex align-items-center'>
                    <button onClick={onShow} class='btn btn-secondary bg-order-dark'>Buy</button>
                    { show ?
                    <div class='ml-2'>
                        <button class='btn btn-secondary bg-order-dark'>Request Quote</button>
                        <button class='btn btn-secondary bg-order-dark ml-2'>Visit store</button>
                    </div>
                    : null
                    }
                </div>
            </div>
            <div className="search-wrapper">
                <span class="las la-search"> </span>
                <input type="search" placeholder="Search here"/>
            </div>
            <div className="user-wrapper">
                <p><i class='fa fa-bell' /></p> &nbsp; &nbsp;
                <img src={img} alt="" width="30px" height="30px"/>
                <div class='w-100'>
                    <h4 style={{whiteSpace:'nowrap'}}>John Doe</h4>
                    <small style={{whiteSpace:'nowrap'}}>Super admin</small>
                </div>
            </div>
        </header>
    );
}

export default Navbar;