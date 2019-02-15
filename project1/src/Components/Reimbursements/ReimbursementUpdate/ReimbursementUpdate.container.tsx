import { IState } from "../../../Reducers";
import { connect } from "react-redux";
import { getAllUsers } from '../../../Actions/users/Users.actions'
import { updateAmount, updateDescription, updateStatus, updateType, updateReimbursement, setReimbursementId } from '../../../Actions/reimbursements/Reimbursements.actions'
import { ReimbursementComponent } from "../Reimbursements.component";
import { ReimbursementUpdateComponent } from "./ReimbursementUpdate.component";

const mapStateToProps = (state: IState, ownProps) => {
    return {
     user: state.login.user,
     allUsers: state.users.allUsers,
     params: ownProps.match.params,
     statusIdReimbursements: state.reimbursement.statusIdReimbursements,
     userIdReimbursements: state.reimbursement.userIdReimbursements,
     updatedReimbursement: state.reimbursement.updatedReimbursement
    }
  }
  
  // user: state.login.user,
  // username: state.login.username,
  // password: state.login.password
  
  const mapDispatchToProps = {
    getAllUsers,
    updateAmount,
    updateDescription,
    updateStatus,
    updateType,
    updateReimbursement,
    setReimbursementId,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementUpdateComponent);