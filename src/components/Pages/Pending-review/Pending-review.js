import React from 'react'
import './Pending-review.css'
import pic from './pic.jpg'
import Rating from '@mui/material/Rating';



const PendingReview = () => {
    const [value, setValue] = React.useState(2);

    return (
        <main>
            <div class="cards">
                <h2>Pending review(2)</h2>
                <hr/>
                
                <div className='review-card-container'>
                    <div className='review-container'>
                        <div className='review-image'>
                            <img src={pic} class='img-responsive img-fluid' alt='' />
                        </div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p>Delivered on 24-09-19</p>
                        </div>
                        <div className='review-button'>
                            <button data-toggle="modal" data-target="#examodal">Rate this Product</button>
                        </div>
                    </div>
                    <div className='review-container'>
                        <div className='review-image'>
                        <img src={pic} class='img-responsive img-fluid' alt='' />
                        </div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p>Delivered on 24-09-19</p>
                        </div>
                        <div className='review-button'>
                            <button data-toggle="modal" data-target="#examodal">Rate this Product</button>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={pic} class="d-block w-50 image-responsive" alt="..."/>
                        <div>
                            <p>Black view Android</p>
                            <p>N50,000</p>
                            <p class='text-overline'>N70,000</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={pic} class="d-block w-50 image-responsive" alt="..."/>
                        <div>
                            <p>Black view Android</p>
                            <p>N50,000</p>
                            <p class='text-overline'>N70,000</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={pic} class="d-block w-50 image-responsive" alt="..."/>
                        <div>
                            <p>Black view Android</p>
                            <p>N50,000</p>
                            <p class='text-overline'>N70,000</p>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/* ...................Modal.................... */}
                <div class=" modal fade" id="examodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header">
                                
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class='d-flex justify-content-between pl-5 pr-5 mt-3 '>
                                    {/* <i class='fa fa-star orange-bg 2-x'/>
                                    <i class='fa fa-star 2-x'/>
                                    <i class='fa fa-star 2-x'/>
                                    <i class='fa fa-star 2-x'/>
                                    <i class='fa fa-star 2-x'/> */}
                                    <Rating
                                       name="size-large" size="large"
                                        value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                </div>
                                <div class='p-5'>
                                    <form>
                                        <textarea class='form-control d-block' col='2' row='2' placeholder='comment'/><br/><br/>
                                        <input type='submit' class='btn bg-main btn-secondary d-block mt-4'/>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>   
        </main>
    )
};

export default PendingReview;
