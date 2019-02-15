import React from 'react';
import { Users } from '../../models/Users';
import { ReimbursementIdDisplayComponent } from '../Reimbursements/ReimbursementId/ReimbursementIdDisplay.component';
import { Reimbursement } from '../../models/Reimbursement';
import { UserIdDisplayComponent } from '../Users/UserId/UserIdDisplay.component';
import  UserUpdateComponent  from '../UserUpdate/UserUpdate.container';




interface IProfileProps {
    user: Users,
    allUsers: Users[],
    userIdReimbursements: Reimbursement[],
    params:any,
    history,
    getAllUsers: () => void,
    getReimbursementByUId: (userid:number) => void
}
export class ProfileComponent extends React.Component<IProfileProps, any> {
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

getUserId = (username:String) => {
    for (const key of this.props.allUsers) {
        if(key.username === username){
            return key.userId
        }
    }
    return 0;
}

getUser = (username:String):Users => {
    for (const key of this.props.allUsers) {
        if(key.username === username){
            return key
        }
    }
    return new Users;
}

componentDidMount() {
    this.props.getAllUsers();
    this.props.getReimbursementByUId(this.getUserId(this.props.params.username));
}

linkTo = () => {
    return;
}

rLinkTo = (key:number) => {
    this.props.history.push(`/updatereimbursements/${key}`);
}

  render  () {
        const rUser = this.getUser(this.props.params.username)
        const userComponent:any = <UserIdDisplayComponent  user={rUser} onClick={()=>this.linkTo()}/>;
        const allReimbursements:any[] = [];
        for (const key of this.props.userIdReimbursements) {
            allReimbursements.push(<ReimbursementIdDisplayComponent key={key.reimbursementId} reimbursement={key} username={this.props.params.username} onClick={()=> this.rLinkTo(key.reimbursementId)}/> 
            )
            
        }
        
        return (
        //onsubmit{this.login}
            <div id='profile'>
                <table id='profile-user'>
                    <tbody>
                        <tr className='table-row'>
                            <td>Username</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Role</td>
                        </tr>
                        {userComponent}
                    </tbody>
                </table>
                <table className='terminal-table'>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Type</td>
                        </tr>
                        {allReimbursements}
                    </tbody>
                </table>
                {this.props.user.role.roleId === 1 && <UserUpdateComponent user={rUser}/>}
            </div>
        )
    }
  }

