import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    console.log(event.target.value);
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  
  const deleteItems = (id) =>{
    console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className=' main_div'>
        <div className='center_div'>
          <br />
          <h1> To-Do List </h1>
          <br />
          <input type='text' placeholder='Add a Item' onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li> {listItem} </li> */}

            {Items.map((itemval, index) => {
              return <ToDoLists 
              key ={index} 
              id={index} 
              text={itemval} 
              onSelect={deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>

    </>
  );
};

export default App;