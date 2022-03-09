import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';






const AddItem = () => {
    const [items, setItems] = useState([
        { itemName: ' 1', quantity: 1, isSelected: false },
        { itemName: ' 2', quantity: 3, isSelected: true },
        { itemName: ' 3', quantity: 2, isSelected: false },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };
    
        const newItems = [...items, newItem];
    
        setItems(newItems);
        setInputValue('');
    };

    const toggleComplete = (index) => {
        const newItems = [...items];
    
        newItems[index].isSelected = !newItems[index].isSelected;
    
        setItems(newItems);
    };


  return (
    <main>
        <div class='cards container-fluid'>
            <div class='row justify-content-between'>
            <div className='add-item-box'>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
                <i class='fa fa-plus'  onClick={() => handleAddButtonClick()} />
            </div>
                 <div className='item-list'>
                        {items.map((item, index) => (
                            <div className='item-container'>
                                <div className='item-name'>
                                    {item.isSelected ? (
                                       null
                                    ) : (
                                        <>
                                            <div class='col-md-8 mt-1'>
                                                <p class='text-secondary'>Attachments {item.itemName}</p>
                                                <input type="file" id="myfile" name="myfile" class='form-control'/>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    </main>
  )
}


const Editor = () => { 

    const [items, setItems] = useState([
        
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };
    
        const newItems = [...items, newItem];
    
        setItems(newItems);
        setInputValue('');
    };



        return (
            <div className="App p-5 m-auto">
                <form class='d-block m-auto'>
                    <div class="row mb-4">
                        <div class="col">
                        <label class='text-secondary'>Name</label>
                        <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div class="col">
                        <label class='text-secondary'>Email Address</label>
                        <input type="email" class="form-control" placeholder="emailaddress@gmail.com"/>
                        </div>
                    </div>
                    <br/>
                <h5 class='text-secondary d-block'>Message</h5>
                <br/>
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } } class='height-support-50' 
                />
                    <div class='d-flex align-items-center'>
                        <div class='col-md-8 mt-4 align-items-center'>
                            <p class='text-secondary h5'>Attachments</p>
                            <input type="file" id="myfile" name="myfile" class='form-control' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                        </div>
                        <div class='col-md-4 align-items-center'>
                            <p class='btn btn-secondary bg-main text-light mt-5'onClick={() => handleAddButtonClick()}>Add More</p>                   
                        </div>
                    </div>
                    <div className='item-list mb-5'>
                        {items.map((item, index) => (
                            <div className='item-container'>
                                <div className='item-name'>
                                    {item.isSelected ? (
                                       null
                                    ) : (
                                        <>
                                            <div class='col-md-8 mt-1'>
                                                {/* <p class='text-secondary'>Attachments {item.itemName}</p> */}
                                                <div class='input-group align-items-center justify-content-center'>
                                                <input type="file" id="myfile" name="myfile" class='form-control'/>
                                                <i class='fa fa-trash text-secondary ml-2 align-items-center'/>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class='d-flex col-6 m-auto justify-content-between mt-4'>
                        <input type='submit' value='submit' class='btn btn-secondary bg-main text-light mr-4'/>
                        <button class='btn btn-secondary bg-main text-light '>Cancel</button>
                    </div>

                    {/* .................................................................. */}
                   {/* <AddItem/> */}
                </form>
                
                
            </div>
        );

}

export default Editor;
