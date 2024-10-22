
export function addUser(user) {
    
    return{
        type: "addUser",
        payload: {user}}
    }


  
    
   export  function removeUserById(id) {
      
                   
      return{
            type:'removeUser',
            payload: {
                id          
          }};    

    }

    export  function removeAllUsers() {
             
        return{
              type:'removeAllUsers',
       
      }
    }
