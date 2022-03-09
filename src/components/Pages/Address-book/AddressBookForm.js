import React from 'react'
import {Link} from 'react-router-dom'

const AddressBookForm = () => {
  return (
    <main>
        <div class='cards'>
            
            <form>
                <div class='container-fluid p-5'>
                <Link to='/address-book'><i class='fa fa-arrow-left text-dark mr-2'/> go back</Link>
                <br/><br/>
                    <div class='row'>                        
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">First Name</label>
                            <input type="text" class="form-control" required id="inputEmail4"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Last Name</label>
                            <input type="text" class="form-control" required id="inputPassword4" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress">Phone Number</label>
                            <input type="text" class="form-control" id="inputAddress" required placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Additional Phone Number</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputCity"> Address</label>
                            <input type="text" class="form-control" required id="inputCity" />
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputState">Additional Address</label>
                            <input type="text" class="form-control"  id="inputCity" />
                        </div>

                        <button type="submit" class="btn col-md-12 password-button">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
  )
}

export default AddressBookForm