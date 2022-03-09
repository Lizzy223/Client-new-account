import React, {useState} from 'react'
import Editor from './Ckeditor.js'
import './Support.css'
import { Link } from 'react-router-dom'

const Support = () => {

    const[isShow, setisShow] = useState(false);

    const show = () => setisShow(!isShow);

  return (
    <main>
        <div class="cards">
            <div class='container-fluid'>
                <div class='row mt-4'>
                    <div class='col-md-8'>
                        <div class='row'>
                            <div class='col-md-12 p-2 mt-2'>
                                <Link to='/support' class='mb-3'><i class='fa fa-arrow-left'/>&nbsp;&nbsp;back to support page</Link>
                                <h2>Support</h2>
                                <h3 class=' mt-4 font-bold'>Ticket #YFA-277-23560 - Call Follow up- portal.tenpluslabs.com</h3>
                            </div>
                            <div class='mt-4'>
                                {/* <div class="dropdown ">
                                    <button class="btn btn-dropdown btn-message dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Reply
                                    </button>
                                    <div class="dropdown-menu message-menu" aria-labelledby="dropdownMenuButton">
                                        <Editor/>
                                    </div>
                                </div>
                                */}
                                <div class='col-md-10  m-auto d-flex justify-content-between show-btn' onClick={show}>
                                    <div class='float-left d-flex'>
                                        <i class='fa fa-pen text-primary mr-2'/>
                                        <p>Reply</p>
                                    </div>
                                    <div class='float-right'>
                                        <i class='fa fa-angle-down text-primary' />
                                    </div>
                                </div>
                                <div class='mt-2 mb-2 col-md-10 p-2'>
                                    { isShow ? <Editor/> : null }
                                </div>
                            </div>
                            <div class='col-md-12 mt-4 shadow'>
                                <div class='mb-2 p-5'>
                                    <div class='float-left d-flex'>
                                        <p>B Motunrayo E</p>
                                        <p class='bg-blue text-primary rounded p-1 ml-2'>operator</p>
                                    </div>
                                    {/* date and time */}
                                    <div class='float-right'>
                                        <p>30/01/2022 (13:58)</p>
                                    </div>                            
                                </div>
                                <hr/>
                                <div class='p-5'>
                                    <p class=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus auctor risus, eu posuere leo faucibus ut. Sed dignissim auctor sollicitudin. Quisque feugiat nunc id ipsum gravida, dapibus egestas magna pretium. Sed suscipit mi lacus, vitae convallis est luctus tristique. Fusce et nisl sit amet arcu molestie vulputate id et est. Morbi faucibus nisi vitae iaculis scelerisque. Donec placerat odio nec odio accumsan molestie. Praesent quam felis, commodo vel malesuada a, placerat ac turpis.

                                    Nam a lacinia ante. Nullam sed tincidunt leo, et placerat lacus. Duis facilisis odio at nulla euismod elementum. Nulla consequat, nibh quis luctus facilisis, sapien metus ultricies nisl, eget congue mauris felis sed ex. Curabitur sed risus porttitor, vulputate nisl nec, porta justo. Fusce sit amet tellus nec lacus luctus sollicitudin. Maecenas et dui sodales, tincidunt nibh quis, rhoncus magna. Fusce non arcu aliquet, tincidunt nulla ut, imperdiet ligula. Pellentesque consequat metus mauris, at interdum quam molestie quis. Ut enim sem, interdum vel venenatis sed, pharetra eu purus. Aliquam scelerisque, augue ullamcorper interdum pellentesque, massa erat pretium arcu,
                                    a laoreet neque elit et augue. Morbi ultricies, ante eu porttitor sollicitudin, sem ligula dignissim nibh, a faucibus urna risus ac magna.
                                    </p>
                                </div>
                            </div>
                            <div class='col-md-12 mt-4 shadow'>
                                <div class='mb-2 p-5'>
                                    <div class='float-left d-flex'>
                                        <p class='p-1'>B Motunrayo E</p>
                                        <p class='bg-blue text-primary rounded p-1 ml-2'>operator</p>
                                    </div>
                                    {/* date and time */}
                                    <div class='float-right'>
                                        <p class=''>30/01/2022 (13:58)</p>
                                    </div>                            
                                </div>                            
                                <hr/>
                                <div class='p-5'>
                                    <p>
                                    Dear Abdul,<br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus auctor risus, eu posuere leo faucibus ut. Sed dignissim auctor sollicitudin. Quisque feugiat nunc id ipsum gravida, dapibus egestas magna pretium. Sed suscipit mi lacus, vitae convallis est luctus tristique. Fusce et nisl sit amet arcu molestie vulputate id et est. Morbi faucibus nisi vitae iaculis scelerisque. Donec placerat odio nec odio accumsan molestie. Praesent quam felis, commodo vel malesuada a, placerat ac turpis.

                                    Nam a lacinia ante. Null
                                    </p>
                                </div>
                            </div>
                            <div class='col-md-12 mt-4 shadow'>
                                <div class='mb-2 p-5'>
                                    <div class='float-left d-flex'>
                                        <p>Bolahan Abdullah</p>
                                        <p class='bg-success text-light rounded p-1 ml-2'>owner</p>
                                    </div>
                                    {/* date and time */}
                                    <div class='float-right'>
                                        <p>30/01/2022 (13:58)</p>
                                    </div>                            
                                </div><hr/>
                                <div class='p-3'>
                                    <p class='p-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.o at nulla euismod elementum. Nulla consequat, nibh quis luctus facilisis, sapien metus ultricies nisl, eget congue mauris felis sed ex. Curabitur sed risus porttitor, vulputate nisl nec, porta justo. Fusce sit amet tellus nec lacus luctus sollicitudin. Maecenas et dui sodales, tincidunt nibh quis, rhoncus magna. Fusce non arcu aliquet, tincidunt nulla ut, imperdiet ligula. Pellentesque consequat metus mauris, at interdum quam molestie quis. Ut enim sem, interdum vel venenatis sed, pharetra eu purus. Aliquam scelerisque, augue ullamcorper interdum pellentesque, massa erat pretium arcu,
                                    a laoreet neque elit et augue. Morbi ultricies, ante eu porttitor sollicitudin, sem ligula dignissim nibh, a faucibus urna risus ac magna.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-4 p-2 '>
                    <p class='font-bold mb-2'>Ticket Information</p>
                        <div class='p-2'>
                            <p class='text-secondary'>Requestor</p>
                            <p class=''>Thelma R</p>
                            <hr class='mt-1'/>
                        </div>
                        <div class='p-2'>
                            <p class='text-secondary'>Department</p>
                            <p class=''>Customer service perk</p>
                            <hr class='mt-1'/>
                        </div>
                        <div class='p-2'>
                            <p class='text-secondary'>Sumbitted</p>
                            <p class=''>29/01/2022 (09:31)</p>
                            <hr class='mt-1'/>
                        </div>
                        <div class='p-2'>
                            <p class='text-secondary'>Last updated</p>
                            <p class=''>3 days ago</p>
                            <hr class='mt-1'/>
                        </div>
                        <div class='p-2'>
                            <p class='text-secondary'>Status/Piority</p>
                            <div class='d-flex'>
                                <p class='bg-dark rounded text-light p-1 mr-3'>Answered</p>
                                <p>Medium</p>
                            </div>
                            <hr class='mt-1'/>
                        </div>
                        <div class='d-flex'>
                            <button class='btn btn-primary p-2 mr-3'>Reply</button>
                            <button class='btn btn-primary p-2 ml-3'>Close</button>
                        </div>
                        <p class='font-bold mt-5'>Attachments</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Support