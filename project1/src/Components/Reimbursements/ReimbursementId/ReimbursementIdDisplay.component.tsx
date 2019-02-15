import React from 'react';
import { Reimbursement } from '../../../models/Reimbursement';
import { Users } from '../../../models/Users';

interface IReimbursementIdDisplayProps {
    reimbursement: Reimbursement,
    username: String,
    onClick: () => void,
}

export class ReimbursementIdDisplayComponent extends React.PureComponent<IReimbursementIdDisplayProps, any> {

  render() {
    return (
      <tr className='reimbursementid-row inverse-hover' onClick={this.props.onClick}>
          <td className='reimbursementid-row'>{this.props.username} </td>
          <td className='reimbursementid-row'>{this.props.reimbursement.amount} </td>
          <td className='reimbursementid-row'>{this.props.reimbursement.dateSubmitted.slice(0, 19).replace('T', ' ')}</td>
          <td className='reimbursementid-row'>{this.props.reimbursement.dateResolved.slice(0, 19).replace('T', ' ')}</td>
          <td className='reimbursementid-row'>{this.props.reimbursement.description}</td>
          <td className='reimbursementid-row'>{this.props.reimbursement.status.status}</td>
          <td className='reimbursementid-row'>{this.props.reimbursement.type.type}</td>
      </tr>
    )
  }

}