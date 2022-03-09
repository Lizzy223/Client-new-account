import React from 'react'
import lana from '../../../assets/lana.jpg'

const SavedItem = () => {
  return (
    <main>
        <div class='container-fluid cards p-5'>
            <h3 class='mb-3 mt-2 p-2'>Saved Items(3)</h3>
            <hr/>
            <div class='row justify-content-between mt-3'>
                <div class='col-md-3 col-sm-6 shadow p-4'>
                    <div class='row'>
                        <div class='col-md-12'>
                            <div class='float-left'>
                                <p class='red-bg ml-n4' style={{backgroundColor:'red',color:'#fff',padding:'.5rem',borderTopRightRadius:'16px',borderBottomRightRadius:'16px',zIndex:'25',position:'absolute',top:'left'}}>15% off</p>
                            </div>
                            <div class='float-right'>
                                <i class='fa fa-heart'/>
                            </div>
                        </div>
                        <div class='col-md-8 m-auto text-center'>
                            <img src={lana} alt='' class='img-fluid img-responsive'/>
                            <p class=''>Thermocool super hair conditional</p>
                        </div>
                        <div class='col-md-12'>
                            <div class='float-left'>
                                <p class='font-bold'>N123,000</p>
                            </div>
                            <div class='float-right'>
                                <p class='text-secondary strike'>N183,000</p>
                            </div>
                        </div>
                        <button class='btn-lg btn-secondary bg-main m-auto text-center'>Add to cart</button>
                    </div>
                </div>
                <div class='col-md-3 col-sm-6 shadow p-4'>
                    <div class='row'>
                        <div class='col-md-12'>
                            <div class='float-left'>
                                <p class='red-bg ml-n4' style={{backgroundColor:'red',color:'#fff',padding:'.5rem',borderTopRightRadius:'16px',borderBottomRightRadius:'16px',zIndex:'25',position:'absolute',top:'left'}}>15% off</p>
                            </div>
                            <div class='float-right'>
                                <i class='fa fa-heart'/>
                            </div>
                        </div>
                        <div class='col-md-8 m-auto text-center'>
                            <img src={lana} alt='' class='img-fluid img-responsive'/>
                            <p class=''>Thermocool super hair conditional</p>
                        </div>
                        <div class='col-md-12'>
                            <div class='float-left'>
                                <p class='font-bold'>N123,000</p>
                            </div>
                            <div class='float-right'>
                                <p class='text-secondary strike'>N183,000</p>
                            </div>
                        </div>
                        <button class='btn-lg btn-secondary bg-main m-auto text-center'>Add to cart</button>
                    </div>
                </div>
                <div class='col-md-3 col-sm-6 shadow p-4'>
                    <div class='row'>
                        <div class='col-md-12'>
                            <div class='float-left'>
                                <p class='red-bg ml-n4' style={{backgroundColor:'red',color:'#fff',padding:'.5rem',borderTopRightRadius:'16px',borderBottomRightRadius:'16px',zIndex:'25',position:'absolute',top:'left'}}>15% off</p>
                            </div>
                            <div class='float-right'>
                                <i class='fa fa-heart'/>
                            </div>
                        </div>
                        <div class='col-md-8 m-auto text-center'>
                            <img src={lana} alt='' class='img-fluid img-responsive'/>
                            <p class=''>Thermocool super hair conditional</p>
                        </div>
                        <div class='col-md-12'>
                            <div class='float-left'>
                                <p class='font-bold'>N123,000</p>
                            </div>
                            <div class='float-right'>
                                <p class='text-secondary strike'>N183,000</p>
                            </div>
                        </div>
                        <button class='btn-lg btn-secondary bg-main m-auto text-center'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default SavedItem