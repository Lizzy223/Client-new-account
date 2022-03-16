import React from 'react'
import pic from '../../../assets/lana.jpg'
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
   'View contact',
  'Media, links and docs',
  'search',
  'Mute notifications',
  'Wallpaper',
  'More',
];

const ITEM_HEIGHT = 48;

 function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {/* <MoreVertIcon /> */}
        <i class='fa fa-bar'/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.0,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const Msg= () =>{
    return(
        <div class='col-md-12'>
            <div class='row'>
                <div class='col-6 float-left'>
                    <div class='float-left'>
                        <div class='float-left'>
                            <img src={pic} alt='' class='mr-3' id='profile-pic' />
                        </div>
                        <div className='float-right'>
                            <div class='float-left'>
                                <p>Mike Lyods</p>
                                <small>100000mah ultra slim fast charging power banks</small>
                            </div>
                            <div class='float-right'>
                                <small>06:05pm</small>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class='col-6'></div>
            </div>            
        </div>
    )
}

const Inbox = () => {

    // const [show, setShow] = useState(false);

    // const onShow = () => setShow(!show);

  return (
    <main>
        <div class='cards'>
            <div class='container-fluid'>
                <div class='row'>
                    {/* ............................horizontal bar on the inbox..................... */}
                    <div class='col-md-12 border-bottom  p-2 mb-4'>
                        <div class='row'>
                            <div class='col-4'>
                                <div class='float-left d-flex p-3'>
                                    <img src={pic} alt='' class='mr-3' id='profile-pic' />
                                    <h4 class='name'>Piority</h4>
                                    <i class="fa fa-angle-right fa-1x icon-size text-secondary ml-2"></i>
                                </div>
                                <div class='p-3 float-right '>
                                    <i class="fa fa-filter fa-1x text-secondary ml-2"></i>
                                    <i class="fa fa-search fa-1x text-secondary ml-2"></i>
                                </div>
                            </div>
                            <div class='col-8'>
                                <div class='float-left  p-3'>
                                    <div class='d-flex'>
                                        <i class="fa fa-angle-left fa-1x icon-size text-secondary mr-2"></i>
                                        <h4 class='name'>Mike Lord</h4>
                                    </div>
                                    <div>
                                    <small class=' ml-3 text-success'>Online</small>
                                    </div>
                                    {/* <i class="la la-angle-right"></i> */}
                                   
                                    {/* <i class="fa fa-arrow-right"></i> */}
                                </div>
                                <div class='p-3 float-right d-flex '>
                                    <i class="fa fa-phone fa-1x text-secondary ml-2 btn " data-toggle="modal" data-target="#exampleModal"></i>
                                    <i class="fa fa-video fa-1x text-secondary ml-2 btn " data-toggle='modal' data-target='#videoModal'></i>
                                    {/* <i class="fas fa-ellipsis-v fa-1x text-secondary ml-2"></i> */}
                                    <LongMenu/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ............................end of horizontal bar on the inbox..................... */}

                    {/* ............................List of messages in the inbox..................... */}
                    <div class='col-md-4 border-right'>
                        <Link to='#' class='' >                            
                                <div class='float-left'>
                                    <img src={pic} alt='' class='mr-3' id='profile-pic' />
                                </div>
                                <div className='float-right'>
                                    <div class='float-left'>
                                        <p>Mike Project</p>
                                        <small>100000mah ultra slim fast charging power banks</small>
                                    </div>
                                    <div class='float-right'>
                                        <small>06:05pm</small>
                                    </div>
                                </div>                               
                        </Link>
                        <br/>
                        <br/>
                        <br/>
                        <div class='mt-3 d-block '>
                            <Link to='#msg1' class='mt-3 d-block' >                            
                                    <div class='float-left'>
                                        <img src={pic} alt='' class='mr-3' id='profile-pic' />
                                    </div>
                                    <div className='float-right'>
                                        <div class='float-left'>
                                            <p>Lyods Project</p>
                                            <small>100000mah ultra slim fast charging power banks</small>
                                        </div>
                                        <div class='float-right'>
                                            <small>06:05pm</small>
                                        </div>
                                    </div>                               
                            </Link>
                        </div>
                    </div>
                     {/* ............................End of List of messages in the inbox..................... */}

                      {/* ............................Messages in the inbox..................... */}
                    <div class='col-md-8'>
                    {/* { show ? */}
                        <div class='row' id='msg1' >
                             {/* ..............receiver.................. */}
                            
                            <Msg/>
                            {/* ..............end of receiver.................. */}
                             {/* ..............sender.................. */}
                            <div class='col-md-12'>
                                <div class='row'>
                                    <div class='col-6'></div>
                                    <div class='col-6 '>
                                        <div class='float-right'>
                                            <div class='float-left'>
                                                <img src={pic} alt='' class='mr-3' id='profile-pic' />
                                            </div>
                                            <div className='float-right'>
                                                <div class='float-left'>
                                                    <p>Mike Lyods</p>
                                                    <small>100000mah ultra slim fast charging power banks</small>
                                                </div>
                                                <div class='float-right'>
                                                    <small>06:05pm</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                             {/* ..............end of sender.................. */}

                             {/* .................Input.............. */}
                             <div class='col-12 mt-5'>
                                    <form>
                                        <div class='input-group'>
                                        <input class='send-input ' type='text' placeholder='Enter your message'/>
                                        <button class='send-btn d-flex align-items-center justify-content-center' type='submit'>
                                            <i class='fa fa-paper-plane '/>
                                        </button>
                                        </div>
                                    </form>
                             </div>
                        </div>

                        {/* : null} */}

                    </div>
                     {/* ............................ End of messages in the inbox..................... */}

                     {/* ...................................Call request modal................................... */}

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header no-border p-2">
                            
                            <button type="button" class="close rounded bg-secondary text-light " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body m-auto p-2">
                            <form>
                                
                                <div class='d-block'>      
                                    <p class='d-block'>Request a call</p>                             
                                    <textarea type='text' col='2' row='2' class='form-control' placeholder='Enter your message' /><br/>
                                    <input type='datetime-local' class='form-control mb-4' />
                                    <input type='submit' class='btn bg-dark btn-primary no-border'/>
                                </div>
                            </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div> */}
                        </div>
                    </div>
                    </div>
                    {/* ...................................End of Call request modal................................... */}
                      {/* ...................................Call request modal................................... */}

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header no-border p-2">
                            
                            <button type="button" class="close rounded bg-secondary text-light " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body m-auto">
                            <form>
                                
                                <div class=''>  
                                    <p class='d-block'>Request a Video call</p>                                 
                                    <textarea type='text' col='2' row='2' class='form-control' placeholder='Enter your message to request for video call' /><br/>
                                    <input type='datetime-local' class='form-control mb-4' />
                                    <input type='submit' class='btn bg-dark btn-primary no-border'/>
                                </div>
                            </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div> */}
                        </div>
                    </div>
                    </div>
                    {/* ...................................End of video request modal................................... */}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Inbox