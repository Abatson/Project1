import { IState } from "../../Reducers";
import { connect } from "react-redux";
import { SidebarComponent } from "./Sidebar.component";

const mapStateToProps = (state: IState) => {
    return {
     user: state.login.user
    }
  }


export default connect(mapStateToProps)(SidebarComponent);