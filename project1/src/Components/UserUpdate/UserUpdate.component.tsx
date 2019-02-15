import React from 'react';
import { Users } from '../../models/Users';
import { Roles } from '../../models/Roles';





interface IUserUpdateProps {
    user:Users,
    updatedUser:Users,
    setUserId: (userId:number) => void,
    updateUser: (newUser:Users) => void,
    updateUsername: (username:string) => void,
    updateFirstName: (firstName:string) => void,
    updateLastName: (lastName:string) => void,
    updateEmail: (email:string) => void,
    updateRole: (role:Roles) => void,
}
export class UserUpdateComponent extends React.Component<IUserUpdateProps, any> {
  constructor(props) {
    super(props);
  }
componentDidMount() {
    this.props.setUserId(this.props.user.userId)
    this.props.updateUsername(this.props.user.username)
    this.props.updateFirstName(this.props.user.firstName) 
    this.props.updateLastName(this.props.user.lastName)
    this.props.updateEmail(this.props.user.email)
    this.props.updateRole(this.props.user.role)
}


  updateUser = (event) => {
    event.preventDefault(); // prevent default form submission
    this.props.updateUser(this.props.updatedUser);
  }

  updateUsername = (event) => {
    this.props.updateUsername(event.target.value) 
  }

  updateFirstName = (event) => {
    this.props.updateFirstName(event.target.value) 
  }

  updateLastName = (event) => {
    this.props.updateLastName(event.target.value) 
  }

  updateEmail = (event) => {
    this.props.updateEmail(event.target.value) 
  }
  

  updateRole = (event) => {
    this.props.updateRole({
        roleId: +event.target.value,
        role: ''
    }) 
  }



  render  () {
        
        
        return (
        //onsubmit{this.login}
            <div id='profile'>
               
                <div>Update User</div>
                <form onSubmit={this.updateUser}>
                <table id='status-header'>
                    <tbody>
                        <tr id='status-row'>
                            <td>Username</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Role</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text"
                                    id="inputDescription"
                                    className="text-form"
                                    placeholder="Username"
                                    value={this.props.updatedUser.username}
                                    onChange={this.updateUsername}
                                    required />
                            </td>
                            <td>
                                <input type="text"
                                    id="inputDescription"
                                    className="text-form"
                                    placeholder="First Name"
                                    value={this.props.updatedUser.firstName}
                                    onChange={this.updateFirstName}
                                    required />
                            </td>
                            <td>
                                <input type="text"
                                    id="inputDescription"
                                    className="text-form"
                                    placeholder="Last Name"
                                    value={this.props.updatedUser.lastName}
                                    onChange={this.updateLastName}
                                    required />
                            </td>
                            <td>
                                <input type="text"
                                    id="inputDescription"
                                    className="text-form"
                                    placeholder="Email"
                                    value={this.props.updatedUser.email}
                                    onChange={this.updateEmail}
                                    required />
                            </td>
                            <td>
                            <div >
                                <select className='select-form' value={this.props.updatedUser.role.roleId} onChange={this.updateRole}>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Analyst</option>
                                    <option value={3}>Agent</option>
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

