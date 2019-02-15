import { IState } from "../../Reducers";

import { connect } from "react-redux";
import {getReimbursementByUId} from '../../Actions/reimbursements/Reimbursements.actions'
import { MyProfileComponent } from "./MyProfile.component";
import { updateAmount, updateDescription, updateStatus, updateType, updateReimbursement} from '../../Actions/myprofile/MyProfile.actions'

const mapStateToProps = (state: IState, ownProps) => {
    return {
     user: state.login.user,
     userIdReimbursements: state.reimbursement.userIdReimbursements,
     newReimbursement: state.myProfile.newReimbursement,  
     postRequestMessage: state.myProfile.postRequestMessage   
    }
  }
  
  // user: state.login.user,
  // username: state.login.username,
  // password: state.login.password
  
  const mapDispatchToProps = {
    getReimbursementByUId,
    updateAmount,
    updateDescription,
    updateStatus,
    updateType,
    updateReimbursement
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyProfileComponent);