import React from 'react'
import './Details.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Details = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            org_name:'',
            email: '',
        },
        ValidationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            org_name: Yup.string()
            .max(25, 'Must be 25 characters or less'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <main>            
            <div class="cards">
                <h2>My Details</h2>
                <hr/>
                <form onSubmit='formik.handleSubmit'>
                    <div className='form-wrap'>
                        <label className='label'>First Name <span className='star'>*</span></label>
                        <input
                         placeholder='Name'
                          value={formik.values.firstName}
                          id='firstName'
                          name='firstName'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                           type='text' required/>
                           {formik.touched.firstName && formik.errors.firstName ? (
                               <div>{formik.errors.firstName}</div>
                           ) : null }
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Organization (optional)</label>
                        <input placeholder='Name'
                         id='org_name'
                          name='org_name'
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value='My Name is' type='text' />
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Email <span className='star'>*</span></label>
                        <input placeholder='Name' value='mail@you.com' type='email' required/>
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Organization Email (optional)</label>
                        <input 
                        placeholder='Name'
                        value={formik.values.email}
                        type='email'
                        name='email'
                        id='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                        { formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null }
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Phone Number <span className='star'>*</span></label>
                        <input placeholder='Name' value='123456789' type='tel' required/>
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Alternate Phone number (optional)</label>
                        <input placeholder='Name' value='123456789' type='tel' />
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Gender <span className='star'>*</span></label>
                        <select>
                            <option>No gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>The Two</option>
                        </select>
                    </div>
                    <div className='form-wrap'>
                        <label className='label'>Birthday (optional)</label>
                        <input placeholder='Name' value='My Name is' type='date' />
                    </div>
                    <input type='submit' value='save' className="button"/>
                </form>
            </div>
        </main>
    )
}

export default Details
