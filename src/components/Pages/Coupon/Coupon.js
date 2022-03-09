import React, { useState } from 'react'
import pic from '../Pending-review/pic.jpg'
import Alert from '@mui/material/Alert';

  
  
function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div>
        <input type="text" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <button onClick={handleCopyClick}  class='btn'>  
            <i class='fa fa-copy 2-x'/>         
        </button>
        <span>{isCopied ? <Alert severity="success">Copied sucessfully!</Alert> : null }</span>
      </div>
    );
  }
  

const Coupon = (props) => {
    
   

    return (
    <main>
            <div class="cards">
                <h2>Coupon(2)</h2>
                <hr/>
                <div class='container-fluid'>
                    <div class='row p-4'>
                        <div class='col-12 border mt-4'>
                            <div class='row justify-content-between p-2'>
                                <div class='col-md-2'>
                                    <img src={pic} class='img-responsive img-fluid' alt='' />
                                </div>
                                <div class='col-md-7'>
                                    <h4>
                                    Jumia Nigeria Cupon: 10% off Men's Heel
                                    </h4>
                                    <p> By the usage of this promo code, enjoy an extra 10% discount on all men's heel. </p>
                                </div>
                                <div class='col-md-3'>
                                   <div className='review-button'>
                                        <button data-toggle="modal" data-target="#exampleModal">Reveal the Code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-12 border mt-4'>
                            <div class='row justify-content-between p-2'>
                                <div class='col-md-2'>
                                    <img src={pic} class='img-responsive img-fluid' alt='' />
                                </div>
                                <div class='col-md-7'>
                                    <h4>
                                    Jumia Nigeria Cupon: 10% off Men's Heel
                                    </h4>
                                    <p> By the usage of this promo code, enjoy an extra 10% discount on all men's heel. </p>
                                </div>
                                <div class='col-md-3'>
                                   <div className='review-button'>
                                        <button data-toggle="modal" data-target="#exampleModal">Reveal the Code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-12 border mt-4'>
                            <div class='row justify-content-between p-2'>
                                <div class='col-md-2'>
                                    <img src={pic} class='img-responsive img-fluid' alt='' />
                                </div>
                                <div class='col-md-7'>
                                    <h4>
                                    Jumia Nigeria Cupon: 10% off Men's Heel
                                    </h4>
                                    <p> By the usage of this promo code, enjoy an extra 10% discount on all men's heel. </p>
                                </div>
                                <div class='col-md-3'>
                                   <div className='review-button'>
                                        <button data-toggle="modal" data-target="#exampleModal">Reveal the Code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-card-container'>
                    {/* <div className='review-container'>
                        <div className='review-image'>
                            <img src={pic} alt='' class='img-responsive img-fluid'/>
                        </div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p class='text-success'>30% off till 24-09-19</p>
                        </div>
                        <div className='review-button'>
                            <button data-toggle="modal" data-target="#exampleModal">Reveal the Code</button>
                        </div>
                    </div>
                    <div className='review-container'>
                        <div className='review-image'>
                         <img src={pic} alt='' class='img-responsive img-fluid'/>
                        </div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p>20% off till Nov 2022</p>
                        </div>
                        <div className='review-button'>
                            <button data-toggle="modal" data-target="#exampleModal">Reveal the Code</button>
                        </div>
                    </div> */}

                     {/*..................... modal to zoom image............................... */}

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Coupon</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body p-5 w-100">
                                    <div class='p-5'>
                                        <div className='review-container'>
                                            <div className='review-image'></div>
                                            <div className='review-details'>
                                                <p>100000mah ultra slim fast charging power banks</p>
                                                <p>Order no: 34561234</p>
                                                <p>20% off till Nov 2022</p>
                                            </div>
                                        </div>
                                        <div class=''>
                                            <ClipboardCopy class='p-2 border-none' copyText="https123googlecom" /> 
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>   
        </main>
  )
}

export default Coupon