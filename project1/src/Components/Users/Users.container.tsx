import { IState } from "../../Reducers";
import { UsersComponent } from "./Users.component";
import { connect } from "react-redux";
import {getAllUsers} from '../../Actions/users/Users.actions'

const mapStateToProps = (state: IState, ownProps) => {
    return {
     user: state.login.user,
     allUsers: state.users.allUsers,
     history: ownProps.history
    }
  }
  
  // user: state.login.user,
  // username: state.login.username,
  // password: state.login.password
  
  const mapDispatchToProps = {
    getAllUsers
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);