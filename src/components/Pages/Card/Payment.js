import React from 'react'
import {Link} from 'react-router-dom'

const Payment = () => {
  return (
   <main class="cards p-5">
      <Link to='/card' class='text-dark'><i class='fa fa-arrow-left'/>go back to card</Link> 
    <div class=" mt-5">
      <div class="">
        <form>
          <div class='container-fluid'>
            <div class='row'>
              {/* <h3>Billing Address</h3><br/><br/> */}
              <div class='col-md-6 col-sm-12'>
                  <label for='billing address'><i class='fa fa-profile'/>Name</label>
                  <input type='text' class='form-control' placeholder='Name'/>
              </div>
              <div class='col-md-6 col-sm-12'>
                  <p class=''>Accepted Cards</p>
                  <div class="d-flex">
                    <i class="fa fa-cc-visa" style={{color:'navy'}}></i>
                    <i class="fa fa-cc-amex" style={{color:'blue'}}></i>
                    <i class="fa fa-cc-mastercard" style={{color:'red'}}></i>
                    <i class="fa fa-cc-discover" style={{color:'orange'}}/>
                  </div>
              </div>
              <div class='col-md-6 col-sm-12 mt-2'>
                  <label for='email'><i class='fa fa-message' />Label</label>
                  <input class='form-control' type='text' placeholder="Email" />
              </div>
              <div class='col-md-6 col-sm-12 mt-2'>
                  <label for='email'>Name on Card</label>
                  <input class='form-control' type='text' placeholder="" />
              </div>
              <div class='col-md-6 col-sm-12 mt-2'>
                  <label for='email'><i class='fa fa-card ' />Address</label>
                  <input class='form-control' type='text' placeholder="Address" />
              </div>
              <div class='col-md-6 col-sm-12 mt-2'>
                  <label for='email'>Credit card number</label>
                  <input class='form-control' type='text' placeholder=".... .... .... .... ...." />
              </div>
              <div class='col-md-6 col-sm-12 mt-2'>
                  <label for='email'><i class='fa fa-house' />City</label>
                  <input class='form-control' type='text' placeholder="city" />
              </div>
              <div class='col-md-6 col-sm-12 mt-2'>
                  <div class='row d-flex'>
                      <div class='col-md-5 col-sm-11'>
                          <label for='email'><i class='fa fa-message' />State</label>
                          <input class='form-control ' type='text' placeholder="" />
                      </div>
                      <div class='col-md-5 col-sm-11'>
                          <label for='email'><i class='fa fa-message' />Zip</label>
                          <input class='form-control ' type='text' placeholder="" />
                      </div>
                  </div>
              </div>
              <div class='col-md-6 col-sm-12'>
                  <div class='row d-flex'>
                      <div class='col-md-5 col-sm-11'>
                          <label for='email'><i class='fa fa-message' />Expiry Year</label>
                          <input class='form-control ' type='text' placeholder="" />
                      </div>
                      <div class='col-md-5 col-sm-11'>
                          <label for='email'><i class='fa fa-message' />CVV</label>
                          <input class='form-control ' type='text' placeholder="" />
                      </div>
                  </div>
              </div>
            </div>
          </div><br/>
          <input type="submit" value="Continue to checkout" class="btn btn-secondary bg-main mt-5 justify-content-center d-block col-12"/>
        </form>
      </div>
    </div>
</main>

  )
}

export default Payment