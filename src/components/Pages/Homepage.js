import React from 'react';
import './Homepage.css'
import ChartTwo from './Charts/ChartTwo.js'
import {Link} from 'react-router-dom'


function Homepage() {
    return (
        <main>            
            <div class="cards">
                <h2>Account Overview</h2>
                <hr/>
                <div className='card-container'>
                    <div class='container-fluid'>
                        <div class='row p-3 justify-content-between'>
                            <div class='col-md-6 col-sm-12'>
                                <div class='row justify-content-between'>
                                    <div class='col-md-12 shadow p-4'>
                                        <p class='h5'>Total Principal Lent</p>
                                        <h5 class='text-secondary h5 text-center m-auto'>$1,068,110.00</h5>
                                    </div>
                                    <div class='col-md-6 shadow p-5 mt-5'>
                                        <p class='h5'>No of Loans 5 days past due</p>
                                        <h3 class='text-center m-auto'>2</h3>
                                    </div>
                                    <div class='col-md-6 shadow p-5 mt-5'>
                                        <p class='h5'>Browser 5days past due</p>
                                        <br/>
                                        <small class='d-block text-secondary'>browser email</small>
                                        <small class='d-block text-secondary'>browser email</small>
                                        <small class='d-block text-secondary'>browser email</small>

                                    </div>
                                </div>

                            </div>
                            <div class='col-md-6 col-sm-12 shadow p-3'>
                                <p class='h5 p-2'>Principal Borrower State</p>
                                <small class='text-secondary mb-4 p-2 d-block'>Showing Top 7 in borrowing state</small>
                                <ChartTwo/>
                            </div>
                        </div>
                    </div>
                    <div class='container-fluid'>
                        <div class='row p-3 justify-content-between'>                    
                            <div className='col-md-5 card-single'>
                                <p>Account Details <Link to='/billings' className='fas fa-pen'></Link></p>
                                <hr/>
                                <p className='name'>kolade elizabeth</p>
                                <p className='email'>email@mail.com</p>
                                <Link to='/change-password' className='homepage-link'>change password</Link>
                            </div>
                            <div className=' col-md-5 card-single'>
                                <p>Address Book<Link to='/address-book' className='fas fa-pen'></Link></p>
                                <hr/>
                                 <p className='email'>
                                    Room a4, kikelomo runsewe hostel, university of ilorin
                                    university of ilorin teaching hospital
                                    </p><br/>                      
                                <Link to='/address-book/address-form' className='homepage-link'>Edit Address</Link>
                            </div><br/>
                            <div className=' col-md-5 mt-5 card-single '>
                                <p class=''> Wallet Details</p>
                                <hr/>
                                <p className='name '>You have a total balance of</p>
                                 <h4>N2500.00 </h4>
                                <Link to='/add-funds' type="button" class="btn btn-primary">Withdraw</Link>
                                <Link to='/add-funds' type="button" class="btn btn-primary ml-5">Add Fund</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Homepage
