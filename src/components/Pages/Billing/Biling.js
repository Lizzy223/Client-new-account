import React from 'react'
import {Link} from 'react-router-dom'

const Biling = () => {
  return (
    <main>
        <div class='cards container-fluid'>
             <h2 class='p-3'>Billings</h2><hr/>
            <div class='row justify-content-between p-5 align-items-center'>
                <div class='col-md-3 shadow rounded text-center p-5'>
                    <h3 class=''>Quotes</h3>
                     <p class='h5'>No of Quotes 5 days past due</p>
                     <h3 class='text-center m-auto'>2</h3>
                     <Link to='/quotes' class='btn btn-secondary bg-main m-auto'>View</Link>
                </div>
                <div class='col-md-3 shadow rounded text-center p-5'>
                    <h3 class=''>Invoice</h3>
                     <p class='h5'>No of Invoice 5 days past due</p>
                     <h3 class='text-center m-auto'>2</h3>
                     <Link to='/invoice' class='btn btn-secondary bg-main m-auto'>View</Link>
                </div>
                <div class='col-md-3 shadow rounded text-center p-5'>
                    <h3 class=''>Wallet</h3>
                     <p class='h5'>Wallet balance:</p>
                     <h3 class='text-center m-auto'>N2,500.00</h3>
                     <Link to='/add-funds' class='btn btn-secondary bg-main m-auto'>View</Link>
                </div>
                <div class='col-md-3 shadow rounded text-center p-5'>
                    <h3 class=''>Cart</h3>
                     <p class='h5'>No of cart items:</p>
                     <h3 class='text-center m-auto'>2</h3>
                     <Link to='/cart' class='btn btn-secondary bg-main m-auto'>View</Link>
                </div>
            </div>      
        </div>
    </main>
  )
}

export default Biling