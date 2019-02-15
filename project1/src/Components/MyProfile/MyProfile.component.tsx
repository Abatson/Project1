import React from 'react';
import { Users } from '../../models/Users';
import { ReimbursementIdDisplayComponent } from '../Reimbursements/ReimbursementId/ReimbursementIdDisplay.component';
import { Reimbursement } from '../../models/Reimbursement';
import { ReimbursementStatus } from '../../models/reimbursementstatus';
import { ReimbursementType } from '../../models/reimbursementtype';
import { UserIdDisplayComponent } from '../Users/UserId/UserIdDisplay.component';





interface IMyProfileProps {
    user: Users,
    userIdReimbursements: Reimbursement[],
    newReimbursement:Reimbursement,
    postRequestMessage:string,
    dirtyRBit:boolean,
    getReimbursementByUId: (userid:number) => void,
    updateReimbursement: (newReimbursement:Reimbursement) => void,
    updateAmount: (amount:number) => void,
    updateDescription: (description:string) => void,
    updateStatus: (status:ReimbursementStatus) => void,
    updateType: (type:ReimbursementType) => void,
}
export class MyProfileComponent extends React.Component<IMyProfileProps, any> {
  constructor(props) {
    super(props);
  }

 





componentDidMount() {
    this.props.getReimbursementByUId(this.props.user.userId)
    this.props.updateStatus({
        statusId: 1,
        status: ''
    })
    this.props.updateType({
        typeId: 4,
        type: ''
    })
}

componentWillUpdate() {
    if(this.props.newReimbursement.status.statusId === 0){
        this.props.updateStatus({
            statusId: 1,
            status: ''
        })
        this.props.updateType({
            typeId: 4,
            type: ''
        })
    }
}

// componentDidUpdate() {
//     if(this.props.dirtyRBit){
//         this.props.getReimbursementByUId(this.props.user.userId)
//     }
// }

updateReimbursement = (event) => {
    event.preventDefault(); // prevent default form submission
    this.props.updateReimbursement(this.props.newReimbursement);
  }

  updateAmount = (event) => {
    this.props.updateAmount(+event.target.value) 
  }

  updateDescription = (event) => {
    this.props.updateDescription(event.target.value) 
  }

  updateStatus = (event) => {
    this.props.updateStatus({
        statusId: +event.target.value,
        status: ''
    }) 
  }

  updateType = (event) => {
    this.props.updateType({
        typeId: +event.target.value,
        type: ''
    }) 
  }

linkTo = () => {
    return;
}
rLinkTo = () => {
    return;
}

  render  () {
    const userComponent:any = <UserIdDisplayComponent hoverable={false} user={this.props.user} onClick={()=>this.linkTo()}/>;
    const allReimbursements:any[] = [];
    for (const key of this.props.userIdReimbursements) {
        allReimbursements.push(<ReimbursementIdDisplayComponent hoverable={false} key={key.reimbursementId} reimbursement={key} username={this.props.user.username} onClick={()=> this.rLinkTo()}/> 
        )
        
    }
        
    if(this.props.user.userId === 0){
        return (
            <div>You Need To Login</div>
        )
    }else {

        return (
        //onsubmit{this.login}
            <div id='my-profile'>
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
                <div>Reimbursements</div>
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
                <div>New Reimbursement</div>
                <form onSubmit={this.updateReimbursement}>
                <table id='status-header'>
                    <tbody>
                        <tr id='status-row'>
                            <td>Amount</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Type</td>
                        </tr>
                        <tr>
                            <td>
                                 <input type="number"
                                    id="inputAmount"
                                    className="text-form"
                                    placeholder="Amount"
                                    value={this.props.newReimbursement.amount}
                                    onChange={this.updateAmount}
                                    required />
                            </td>
                            <td>
                                <input type="text"
                                    id="inputDescription"
                                    className="text-form"
                                    placeholder="Description"
                                    value={this.props.newReimbursement.description}
                                    onChange={this.updateDescription}
                                    required />
                            </td>
                            <td>
                            <div >
                                <select className='select-form' value={this.props.newReimbursement.status.statusId} onChange={this.updateStatus}>
                                    <option value={1}>Pending</option>
                                </select>
                            </div>
                            </td>
                            <td>
                            <div >
                                <select className='select-form' value={this.props.newReimbursement.type.typeId} onChange={this.updateType}>
                                    <option value={1}>Lodging</option>
                                    <option value={2}>Travel</option>
                                    <option value={3}>Food</option>
                                    <option value={4}>Other</option>
                                </select>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="button-form" type="submit">Update</button>
                </form>
                {this.props.postRequestMessage}
            </div>
        )
    }
    }
  }

