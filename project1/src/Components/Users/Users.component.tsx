import React from 'react';

import { ersClient } from '../../Axios/ers.client';

import { Users } from '../../models/Users';
import { UserIdDisplayComponent } from './UserId/UserIdDisplay.component';
import { getAllUsers } from '../../Actions/users/Users.actions';
import { Link } from 'react-router-dom';



interface IUsersProps {
    user: Users,
    allUsers: Users[],
    history,
    getAllUsers: () => void
}
export class UsersComponent extends React.Component<IUsersProps, any> {
  constructor(props) {
    super(props);
  }

 
//  getUsers = async () => {
//     try {
//         const res = await ersClient.get('/users');
//         let allUsers:Users[]  = res.data;
//         return allUsers;
        
//       } catch (err) {
//           //impediment, how to get api message from error
//         console.log(err);
//         return null;
       
//     }
// }
componentDidMount() {
    this.props.getAllUsers();
}

linkTo = (key:String) => {
    this.props.history.push(`/profile/${key}`);
}

  render  () {
    
    

    if(this.props.user.role.roleId === 3){
        return (
            <div>
                You Are Not Authorized
            </div>
        )
    } else {
        const usersComponents:any[] = [];
        for (const key of this.props.allUsers) {
            usersComponents.push(<UserIdDisplayComponent key={key.userId} user={key} onClick={()=>this.linkTo(key.username)}/> 
            )
            
        }
        console.log(this.props.history)
        return (
        //onsubmit{this.login}
            <div id='users'>
                <table className='terminal-table'>
                    <tbody>
                        <tr className='table-row'>
                            <td>Username</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Role</td>
                        </tr>
                        {usersComponents}
                    </tbody>
                </table>
            </div>
        )
    }
  }

}