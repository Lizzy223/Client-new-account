import React from 'react'
import {Link} from 'react-router-dom'

const SupportNextPage = () => {
  return (
    <main>
        <div class='cards container-fluid'>
            <div class='row m-auto justify-content-evenly'>
                <div class='col-md-3 m-3 p-3 shadow'>
                    <h3 class='text-dark'><i class='fa fas-message mr-2'/>Customer Service Desk</h3>
                    <Link to='/support/support-ticket/support-ticket-message' class='btn btn-secondary bg-main text-light text-center m-auto'>Open ticket</Link>
                </div>
                <div class='col-md-3 p-3 m-3 shadow'>
                    <h3 class='text-dark'><i class='fa fas-message mr-2'/>Customer Service Desk</h3>
                    <Link to='/support/support-ticket/support-ticket-message' class='btn btn-secondary bg-main text-light text-center m-auto'>Open ticket</Link>
                </div>
                <div class='col-md-3 p-3 m-3 shadow'>
                    <h3 class='text-dark'><i class='fa fas-message mr-2'/>Customer Service Desk</h3>
                    <Link to='/support/support-ticket/support-ticket-message' class='btn btn-secondary bg-main text-light text-center m-auto'>Open ticket</Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default SupportNextPage