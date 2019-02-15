import React from 'react';
import { Users } from '../../models/Users';
import { Reimbursement } from '../../models/Reimbursement';
import { ReimbursementIdDisplayComponent } from './ReimbursementId/ReimbursementIdDisplay.component';



interface IReimbursementProps {
    user: Users,
    allUsers: Users[],
    history,
    statusId,
    statusIdReimbursements:Reimbursement[],
    getReimbursementByStatusId: (status:number) => void,
    setStatusId: (status:number) => void,
    getAllUsers: () => void
}


export class ReimbursementComponent extends React.Component<IReimbursementProps, any> {
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
// getReimbursementByStatusId = (status:number) => {
//     this.props.getReimbursementByStatusId(status)
// }

linkTo = (key:number) => {
    this.props.history.push(`/updatereimbursements/${key}`);
}


getUsernameById = (userId:number):string =>  {
    for (const key of this.props.allUsers) {
        if(key.userId === userId){
            return key.username
        }
    }
    return '';
}


setStatus = (status:number) => {
    this.props.setStatusId(status);
    this.props.getReimbursementByStatusId(status);
}

  render  () {
    
    

    if(this.props.user.role.roleId === 3){
        return (
            <div>
                You Are Not Authorized
            </div>
        )
    } else {
        const reimbursementDisplayComponents:any[] = [];
        for (const key of this.props.statusIdReimbursements) {
            reimbursementDisplayComponents.push(<ReimbursementIdDisplayComponent key={key.reimbursementId} reimbursement={key} username={this.getUsernameById(key.author)} onClick={()=> this.linkTo(key.reimbursementId)} /> 
            )
            
        }
        console.log(this.props.history)
        return (
        //onsubmit{this.login}
            <div >
                <table id='status-header'> 
                    <tbody>
                        <tr className='status-row'>
                            <td className='inverse-hover' onClick={() => this.setStatus(1)}>Pending</td>
                            <td className='inverse-hover' onClick={() => this.setStatus(2)}>Approved</td>
                            <td className='inverse-hover' onClick={() => this.setStatus(3)}>Denied</td>
                        </tr>
                    </tbody>
                </table>
                <table className='terminal-table'>
                    <tbody>
                        <tr className='table-row'>
                            <td>Username</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Type</td>
                        </tr>
                        {this.props.statusId !== 0 && reimbursementDisplayComponents}
                    </tbody>
                </table>
            </div>
        )
    }
  }

}