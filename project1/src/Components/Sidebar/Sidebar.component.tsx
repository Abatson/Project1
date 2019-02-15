import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from '../../models/Users';


interface ISidebarProps {
    user: Users,
}

export class SidebarComponent extends React.PureComponent<ISidebarProps, any> {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to="/login" className="list-group-item list-group-item-action bg-light">Login</Link>
                <Link to="/myprofile" className="list-group-item list-group-item-action bg-light">MyProfile</Link>
                {(this.props.user.role.roleId === 2 || this.props.user.role.roleId === 1 ) && 
                  <Link to="/users" className="list-group-item list-group-item-action bg-light">Users</Link>}
                {(this.props.user.role.roleId === 2 || this.props.user.role.roleId === 1 ) && 
                  <Link to="/reimbursements" className="list-group-item list-group-item-action bg-light">Reimbursements</Link>}
            </div>
        </div> 
    )
  }

}
{/* <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
      </div>
</div> */}