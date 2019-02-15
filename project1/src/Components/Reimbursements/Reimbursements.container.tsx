import { IState } from "../../Reducers";
import { connect } from "react-redux";
import { getAllUsers } from '../../Actions/users/Users.actions'
import { getReimbursementByStatusId, setStatusId } from '../../Actions/reimbursements/Reimbursements.actions'
import { ReimbursementComponent } from "./Reimbursements.component";

const mapStateToProps = (state: IState, ownProps) => {
    return {
     user: state.login.user,
     allUsers: state.users.allUsers,
     history: ownProps.history,
     statusId: state.reimbursement.statusId,
     statusIdReimbursements: state.reimbursement.statusIdReimbursements
    }
  }
  
  // user: state.login.user,
  // username: state.login.username,
  // password: state.login.password
  
  const mapDispatchToProps = {
    getAllUsers,
    setStatusId,
    getReimbursementByStatusId
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementComponent);