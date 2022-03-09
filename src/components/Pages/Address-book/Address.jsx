import React from 'react'
import './Address.css'
import {Link} from 'react-router-dom'

const Address = () => {
    return (
        <main>            
            <div class="cards row">
                <div class='d-flex justify-content-between mt-5 col-md-12'>
                    <h2>Address (0)</h2>
                    <button className='address-button float-right'><Link to='./address-form'  class="text-light">Add Address</Link></button>
           
               </div>
              <hr/>
                <div className='card-container container-fluid jusify-content-between'>
                    <div className='card-single col-md-5'>
                        <p>Ahmad Busari</p>
                        <br/>
                        <p className='name'></p>
                        <p className='email'>
                        Room a4, kikelomo runsewe hostel, university of ilorin
                        university of ilorin teaching hospital
                         </p><br/><hr/>
                        <p className='homepage-link'>set as default  <span className='las la-pen'></span><span className='las la-trash'></span></p>
                    </div>
                    <div className='card-single col-md-5 ml-5'>
                        <p>Ahmad Busari</p>
                        <br/>
                        <p className='name'></p>
                        <p className='email'>
                        Room a4, kikelomo runsewe hostel, university of ilorin
                        university of ilorin teaching hospital
                         </p><br/><hr/>
                        <p className='homepage-link'>set as default  <span className='las la-pen'></span><span className='las la-trash'></span></p>
                    </div>
                    <div className='card-single col-md-5 mt-5'>
                        <p>Ahmad Busari</p>
                        <br/>
                        <p className='name'></p>
                        <p className='email'>
                        Room a4, kikelomo runsewe hostel, university of ilorin
                        university of ilorin teaching hospital
                         </p><br/><hr/>
                        <p className='homepage-link'>set as default  <span className='las la-pen'></span><span className='las la-trash'></span></p>
                    </div>             
                </div>

                {/*............................... no orders........................ */}
                {/* <div className='no-orders'>
                        <p>You have No Address yet!</p>
                        <p>All your Address will be placed here for you to access their state anytime.</p>
                        <button>Add Address</button>
                    </div> */}
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Address
