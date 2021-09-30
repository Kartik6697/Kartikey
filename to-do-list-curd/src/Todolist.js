import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import ListCom from './ListCom';

const TodoList = () =>{
    const [item, setItem] = useState("");

    const [newitem, setNewItem] =useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value);
    }

     const listOfItem = () =>{
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem(" ");
    };

return(
    <>
    <div className="main_div">
     <div className="center_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type='text'
            value={item}
            placeholder='Add list'
            onChange={itemEvent} />
            <Button className="newBtn" onClick={listOfItem}>
                  <AddBoxTwoToneIcon />    
             </Button>

            <br />
            <ol>
                 {
                newitem.map((val, index) => {
                    return <ListCom key={index} text={val} />;
                })
            }
            </ol>
            <br />

        </div>
    </div>
    </>
);
};

export default TodoList;