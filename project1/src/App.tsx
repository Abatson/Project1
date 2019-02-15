import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LoginComponent  from './Components/Login/Login.container';
import  UsersComponent  from './Components/Users/Users.container';
import  SidebarComponent  from './Components/Sidebar/Sidebar.container';
import  ProfileComponent  from './Components/Profile/Profile.container';
import  ReimbursementComponent  from './Components/Reimbursements/Reimbursements.container';
import  ReimbursementUpdateComponent  from './Components/Reimbursements/ReimbursementUpdate/ReimbursementUpdate.container';
import  MyProfileComponent  from './Components/MyProfile/MyProfile.container';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        
        <BrowserRouter>
        
          <div id='terminal'>
            <SidebarComponent/>
            <div id='routes'>

            
            <Route path='/login' component={LoginComponent}/>
            <Route path='/users' component={UsersComponent}/>
            <Route path='/profile/:username' component={ProfileComponent}/>
            <Route path='/updatereimbursements/:id' component={ReimbursementUpdateComponent}/>
            <Route path='/reimbursements' component={ReimbursementComponent}/>
            <Route path='/myprofile' component={MyProfileComponent}/>
            </div>
          </div>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
