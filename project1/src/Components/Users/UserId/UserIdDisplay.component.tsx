import React from 'react';
import { Users } from '../../../models/Users';

interface IUserIdDisplayProps {
    user: Users,
    onClick: () => void
    hoverable:boolean
}

export class UserIdDisplayComponent extends React.PureComponent<IUserIdDisplayProps, any> {

  render() {
    return (
      <>
      {this.props.hoverable ? 
        <tr className='table-row inverse-hover' onClick={this.props.onClick}>
          <td >{this.props.user.username} </td>
          <td >{this.props.user.firstName} </td>
          <td >{this.props.user.lastName}</td>
          <td >{this.props.user.email}</td>
          <td >{this.props.user.role.role}</td>
        </tr> : 
        <tr className='table-row' onClick={this.props.onClick}>
          <td >{this.props.user.username} </td>
          <td >{this.props.user.firstName} </td>
          <td >{this.props.user.lastName}</td>
          <td >{this.props.user.email}</td>
          <td >{this.props.user.role.role}</td>
        </tr>}
      
      </>
    )
  }

}