import React from 'react'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'

const Requestform = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const [value, setValue] = React.useState(new Date());


  return (
    <main>
        <div class='cards container-fluid'>
             <h2 class='p-3'>Request a Quote Form</h2><hr/>
            <div class='row justify-content-between p-5 align-items-center'>
                <form class='row'>
                    <div class='col-md-6 mt-3'>
                    <TextField
                        id="outlined-textarea"
                        label="About your Buisness"
                        placeholder="Placeholder"
                        multiline
                        />
                    </div>
                    <div class='col-md-6 mt-3'>
                    <TextField
                        id="outlined-textarea"
                        label="Competitors"
                        placeholder="Placeholder"
                        multiline
                        />
                    </div>
                    <div class='col-md-12 mt-3'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
                            <InputLabel id="demo-simple-select-standard-label">Select a Service</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Web Development</MenuItem>
                            <MenuItem value={20}>Mobile App Development</MenuItem>
                            <MenuItem value={30}>Digital Marketing</MenuItem>
                            <MenuItem value={40}>Data Science</MenuItem>
                            <MenuItem value={50}>Machine Learning</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class='col-md-6 mt-3'>
                        <TextField
                            id="outlined-textarea"
                            label="Scope of work"
                            placeholder="Placeholder"
                            multiline
                            />
                    </div>
                    <div class='col-md-6 mt-3'>
                        <TextField
                            id="outlined-textarea"
                            label="Additional Details"
                            placeholder="Placeholder"
                            multiline
                            />
                    </div>
                    <div class='col-md-6 mt-3'>
                        <TextField id="outlined-basic" label="Target Audience" variant="outlined" />
                    </div>
                    <div class='col-md-6 mt-3'>
                        <TextField id="outlined-basic" label="Target Audience Size" variant="outlined" />
                    </div>
                    <div class='col-md-12 mt-3'>
                        <p class=''>Upload your document <span class='cursor-pointer text-primary' data-toggle="modal" data-target="#exampleModal"> here</span></p>
                    </div>
                    <div class='col-md-6 mt-3'>
                        <TextField id="outlined-basic" type='date' label="Deadline"  InputLabelProps={{
            shrink: true,
          }} variant="outlined" />
                    </div>
                    <div class='col-md-6 mt-3'>
                        <TextField id="outlined-basic" label="Budget" variant="outlined" />
                    </div>
                    <input type='submit' class='btn btn-secondary bg-main text-light col-md-12 mt-5'/>
                </form> 
                               {/*  .........................UPload Modal.........................*/}
                             
               
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <label for="myfile">Your Brief:</label>
                            <input type="file" id="myfile" name="myfile" class='form-control'/><br/><br/>
                            <label for="myfile">Your Logo:</label>
                            <input type="file" id="myfile" name="myfile" class='form-control'/><br/><br/>
                            <label for="myfile">Sample product 1:</label>
                            <input type="file" id="myfile" name="myfile" class='form-control'/><br/><br/>
                            <label for="myfile">Sample product 2:</label>
                            <input type="file" id="myfile" name="myfile" class='form-control'/><br/><br/>
                            <input type="submit" value="Submit" class='btn btn-secondary bg-main text-light' />
                        </form>
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

export default Requestform