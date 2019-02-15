import { IState } from "../../Reducers";

import { connect } from "react-redux";
import {getAllUsers} from '../../Actions/users/Users.actions'
import { ProfileComponent } from "./Profile.component";
import {getReimbursementByUId} from '../../Actions/reimbursements/Reimbursements.actions'

const mapStateToProps = (state: IState, ownProps) => {
    return {
     user: state.login.user,
     allUsers: state.users.allUsers,
     userIdReimbursements: state.reimbursement.userIdReimbursements,
     params: ownProps.match.params,
     history: ownProps.history
    }
  }
  
  // user: state.login.user,
  // username: state.login.username,
  // password: state.login.password
  
  const mapDispatchToProps = {
    getAllUsers,
    getReimbursementByUId
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);