import React from 'react'
import './Password.css'
import 'formik'
import 'yup'

const Password = () => {

   

    return (
        <main>
           <form className='cards'>
           <div class='container-fluid'>
                <div class='row'>
                    <div className='password-form-wrap col-md-10'>
                        <label className='label'>Former Password<span className='star'>*</span></label>
                        <input placeholder='Name' value='123456789' type='password' required/>
                    </div>
                    <div className='password-form-wrap col-md-10'>
                        <label className='label'>New Password<span className='star'>*</span></label>
                        <input placeholder='Name' value='123456789' type='password' required/>
                    </div>
                    <div className='password-form-wrap col-md-10'>
                        <label className='label'>Re-write New Password<span className='star'>*</span></label>
                        <input placeholder='Name' value='123456789' type='password' required/>
                    </div><br/>
                
                        <div class='col-md-10'>
                             <input type='submit' class='d-block w-100' value='save' className="password-button"/>
                        </div>
                    </div>
                </div>
           </form> 
        </main>
    )
}

export default Password
