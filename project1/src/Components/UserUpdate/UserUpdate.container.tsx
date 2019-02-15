import { connect } from "react-redux";
import { UserUpdateComponent } from "./UserUpdate.component";
import { IState } from "../../Reducers";
import {setUserId, updateUser, updateEmail, updateFirstName, updateLastName, updateRole, updateUsername} from '../../Actions/userupdate/UserUpdate.actions'

const mapStateToProps = (state: IState, ownProps) => {
    return {
     user: ownProps.user,
     updatedUser: state.userUpdate.updatedUser,
     postUserRequestMessage: state.userUpdate.postUserRequestMessage
    }
  }
  

  
  const mapDispatchToProps = {
    setUserId,
    updateUser,
    updateUsername,
    updateFirstName,
    updateLastName,
    updateEmail,
    updateRole,
  }




export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateComponent);