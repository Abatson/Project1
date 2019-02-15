import React from 'react';
import { Users } from '../../../models/Users';
import { ReimbursementIdDisplayComponent } from '../../Reimbursements/ReimbursementId/ReimbursementIdDisplay.component';
import { Reimbursement } from '../../../models/Reimbursement';
import { ReimbursementStatus } from '../../../models/reimbursementstatus';
import { ReimbursementType } from '../../../models/reimbursementtype';





interface IReimbursementUpdateProps {
    user: Users,
    allUsers: Users[],
    userIdReimbursements: Reimbursement[],
    statusIdReimbursements: Reimbursement[],
    updatedReimbursement: Reimbursement,
    params:any,
    getAllUsers: () => void,
    setReimbursementId: (reimbursementId:number) => void,
    updateReimbursement: (updatedReimbursement:Reimbursement) => void,
    updateAmount: (amount:number) => void,
    updateDescription: (description:string) => void,
    updateStatus: (status:ReimbursementStatus) => void,
    updateType: (type:ReimbursementType) => void,
}
export class ReimbursementUpdateComponent extends React.Component<IReimbursementUpdateProps, any> {
  constructor(props) {
    super(props);
  }

 


getUserId = (username:String) => {
    for (const key of this.props.allUsers) {
        if(key.username === username){
            return key.userId
        }
    }
    return 0;
}

getUser = (userId:number):Users => {
    for (const key of this.props.allUsers) {
        if(key.userId === userId){
            return key
        }
    }
    return new Users;
}

getReimbursement = (rId:number) => {
    for (const key of this.props.userIdReimbursements) {
        console.log(key.reimbursementId, rId)
        if(key.reimbursementId === rId){
            return key
        }
    }
    for (const key of this.props.statusIdReimbursements) {
        console.log(key.reimbursementId)
        if(key.reimbursementId === rId){
            return key
        }
    }
    return new Reimbursement;
}

componentDidMount() {
    const rReimbursement = this.getReimbursement(+this.props.params.id)
    this.props.setReimbursementId(rReimbursement.reimbursementId)
    this.props.updateAmount(rReimbursement.amount)
    this.props.updateDescription(rReimbursement.description) 
    this.props.updateStatus({
        statusId: rReimbursement.status.statusId,
        status: ''
    }) 
    this.props.updateType({
        typeId:rReimbursement.type.typeId,
        type: ''
    })
}

updateReimbursement = (event) => {
    event.preventDefault(); // prevent default form submission
    this.props.updateReimbursement(this.props.updatedReimbursement);
  }

  updateAmount = (event) => {
    this.props.updateAmount(event.target.value) 
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

  render  () {
        const rReimbursement = this.getReimbursement(+this.props.params.id)
        const rUser = this.getUser(rReimbursement.author).username
        
        const reimbursementComponent:any = <ReimbursementIdDisplayComponent hoverable={false} reimbursement={rReimbursement} username={rUser} onClick={()=>this.linkTo()}/>;
        // const allReimbursements:any[] = [];
        // for (const key of this.props.userIdReimbursements) {
        //     allReimbursements.push(<ReimbursementIdDisplayComponent key={key.reimbursementId} reimbursement={key} username={this.props.params.username} /> 
        //     )
            
        // }
        
        return (
        //onsubmit{this.login}
            <div id='profile'>
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
                        {reimbursementComponent}
                    </tbody>
                </table>
                <div>Update Reimbursement</div>
                <form onSubmit={this.updateReimbursement}>
                <table id='status-header'>
                    <tbody>
                        <tr id='status-row'>
                            {/* <td>Amount</td> */}
                            <td>Description</td>
                            <td>Status</td>
                            <td>Type</td>
                        </tr>
                        <tr>
                            {/* <td>
                                 <input type="number"
                                    id="inputAmount"
                                    className="form-control"
                                    placeholder="Amount"
                                    value={this.props.updatedReimbursement.amount}
                                    onChange={this.updateAmount}
                                    required />
                            </td> */}
                            <td>
                                <input type="text"
                                    id="inputDescription"
                                    className="text-form"
                                    placeholder="Description"
                                    value={this.props.updatedReimbursement.description}
                                    onChange={this.updateDescription}
                                    required />
                            </td>
                            <td>
                            <div >
                                <select className='select-form' value={this.props.updatedReimbursement.status.statusId} onChange={this.updateStatus}>
                                    <option value={1}>Pending</option>
                                    <option value={2}>Approved</option>
                                    <option value={3}>Denied</option>
                                </select>
                            </div>
                            </td>
                            <td>
                            <div >
                                <select className='select-form' value={this.props.updatedReimbursement.type.typeId} onChange={this.updateType}>
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
            </div>
        )
    }
  }

