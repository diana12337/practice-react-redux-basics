const initState = { 
    message: "Działa",
    time: new Date(),
    usersList:[] 
};


const reducer = (state = initState, action) => {
    switch(action.type) {
        case'getCurrentTime':
 
        return  {...state, time:new Date() };
        case'addUser':
        
        return  {...state,  usersList:  [...state.usersList, action.payload.user] };         
        case'removeUser':
        const newList = state.usersList.filter(user => user.id !== action.payload.id) 
        return  {...state,  usersList:  newList };    
        case'removeAllUsers':
        const emptyList = []
        return  {...state,  usersList:  emptyList };   
  
    }
    
return state}

export default reducer
