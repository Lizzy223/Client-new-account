import React, {useState} from 'react'
import {Link} from 'react-router-dom'

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

export default AddItem