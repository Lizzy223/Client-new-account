import React from 'react'
import ChartOne from '../Charts/ChartOne.js'
import ChartTwo from '../Charts/ChartTwo.js'
import ChartThree from '../Charts/ChartThree.js'
import ChartFour from '../Charts/ChartFour';
import ChartFive from '../Charts/ChartFive';
import ChartSix from '../Charts/ChartSix';
import {Link} from 'react-router-dom'


const Chart = () => {
  return (
    <main>
        <div class='cards container-fluid'>
            <div class='row'>
                <div class='col-md-12'>
                    <div class='p-3 mb-5'>
                   
                        <div class='float-left mt-3 mb-3 d-flex'>
                         <Link to='/order' class='text-dark mr-2'><i class='fa fa-arrow-left'/></Link>
                            <div class="dropdown">
                                <button class="btn btn-secondary bg-order-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Status
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/#">Complete</a>
                                    <a class="dropdown-item" href="/#">InComplete</a>
                                    <a class="dropdown-item" href=".#">In progress</a>
                                    <a class="dropdown-item" href=".#">Not Started</a>
                                </div>
                            </div>
                          <div class=' ml-2 d-flex'>
                                <div class='round-circle-complete ml-2'></div>
                                <div class='ml-2'> Incomplete</div>
                            </div>

                        </div>
                        <div class='float-right mt-3 mb-3'>
                            <button class='btn btn-primary bg-order-dark'><Link to='gannt'>View Chart</Link></button>
                        </div>
                    </div>
                </div>
                <div class='row justify-content-between'>
                            <div class='col-md-4 shadow'>
                                <h3 class='p-2'>Costs</h3>
                                <hr/>
                                <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartOne/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Costs</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5 w-100">
                                            <div class='p-5'>
                                                <ChartOne/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow'>
                                <h3 class='p-2'>Tasks</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#xampleModal">
                                    <ChartTwo/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="xampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Tasks</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5 w-100">
                                            <div class='p-5'>
                                                <ChartTwo/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow'>
                                <h3 class='p-2'>Workload</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#exampleMoal">
                                    <ChartThree/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleMoal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Workload</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5 w-100">
                                            <div class='p-5'>
                                                <ChartThree/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow mt-4 mb-3'>
                                <h3 class='p-2'>Time</h3>
                                <hr/>
                                <p type="button" class="btn " data-toggle="modal" data-target="#exampeModal">
                                    <ChartFour/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Time</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5 w-100">
                                            <div class='p-5'>
                                                <ChartFour/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow mt-4 mb-3'>
                                <h3 class='p-2'>Progress</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#examleModal">
                                    <ChartFive/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="examleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Progress</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5 w-100">
                                            <div class='p-5'>
                                                <ChartFive/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow mt-4 mb-3'>
                                <h3 class='p-2'>Health</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#exampleModa">
                                    <ChartSix/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Health</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5 w-100">
                                            <div class='p-5'>
                                                <ChartSix/>
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
            </div>
        </div>
    </main>
  )
}

export default Chart