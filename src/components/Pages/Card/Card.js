import React from 'react'
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <main>
        <div class='cards container-fluid'>
            <h2 class='mt-2'>Card</h2>
            <hr/>
            <div class='row justify-content-center align-items-center p-5'>
                <div class='col-md-3 p-5 shadow justify-content-center align-items-center'>
                    <Link to='card-form' class='btn btn-secondary d-block bg-main'>Connect A Card</Link> 
                </div>
            </div>
        </div>
    </main>
  )
}

export default Card