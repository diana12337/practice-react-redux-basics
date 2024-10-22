import React from 'react';
import { useDispatch } from'react-redux';

const UserItem = ({name = 'Default Name', id = -1}) => {
  
 
        const dispatch = useDispatch();
        
        const removeUserById = event=> {
            event.preventDefault();
                       
            dispatch({
                type:'removeUser',
                payload: {
                    id: id,          
              }});    


        }


    return (
        <li>{name} <button onClick={removeUserById}>usuń</button></li>
    )
}

export default UserItem;