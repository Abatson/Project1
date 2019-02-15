import { connect } from "react-redux";
import {updatePassword, updateUsername, loginRequest, clearMessage} from '../../Actions/login/Login.actions'
import { IState } from "../../reducers";
import { LoginComponent } from "./Login.component";


const mapStateToProps = (state: IState) => {
  return {
   login: state.login
  }
}

// user: state.login.user,
// username: state.login.username,
// password: state.login.password

const mapDispatchToProps = {
  updatePassword,
  updateUsername,
  loginRequest,
  clearMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);