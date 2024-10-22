import React from 'react';
import UserItem from './UserItem';
import {connect} from'react-redux';
import { addUser } from '../actions';



class UserList extends React.Component {
 

        state= {

            name: ""
        }

         getNextNumber = (data)=> {

            let nextNumber;
            if(data.length >= 1){
                const max = data.reduce((prev, current) => {
                    if (+current.id > +prev.id) {
                        return current;
                    } 
                    return prev;
                
                })
           
                nextNumber = max.id + 1
            } else {
        
                nextNumber = 1
            }
            return nextNumber
        }
        addUserData = event => {
            const nextNumber = this.getNextNumber(this.props.usersList)
         
            event.preventDefault()
            const {name} = this.state
             this.props.addUser({userName: name, id: nextNumber })


        }

        handleChange = event => {
            event.preventDefault();
            

            this.setState({
               name: event.target.value,
            });
        }
        render() {
        return (
            <>
                <form onSubmit ={ this.addUserData}>
                    <div>
                        <input onChange={ this.handleChange} value={this.state.name} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {this.props.usersList.map(el => {

                        return <UserItem name={el.userName} id={el.id}/>
                    })}
                    
                </ul>
            </>
        )
    }
}

const mapStateToProps =(state, props) => {

    return {

        usersList: state.usersList
    }
}
  
    const mapActionToProps = {addUser:addUser} 
    export default connect(mapStateToProps, mapActionToProps)(UserList);