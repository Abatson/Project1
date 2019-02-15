import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ersClient } from '../../axios/ers.client';
import { ILoginState } from '../../reducers';
import { updatePassword, updateUsername } from '../../Actions/login/Login.actions';



interface ILoginProps {
    login: ILoginState,
    updatePassword: (password:string) => void,
    updateUsername: (username:string) => void,
    loginRequest: ( username:string, password:string) => void,
    clearMessage: () => void

}
export class LoginComponent extends React.Component<ILoginProps, any> {
  constructor(props) {
    super(props);
  }

componentDidMount() {
  this.props.clearMessage();
}

  updateUsername = (event) => {
    this.props.updateUsername(event.target.value) 
  }

  updatePassword = (event) => {
    this.props.updatePassword(event.target.value)
  }


  login = (event) => {
    event.preventDefault(); // prevent default form submission
    this.props.loginRequest(this.props.login.username, this.props.login.password);
  }
//   signIn = async (event) => {
//     event.preventDefault(); // prevent default form submission
//     try {
//       const res = await ersClient.post('/auth/login', this.state.credentials);
//       console.log(res);
//       this.props.history.push('/home');
//     } catch (err) {
//       console.log(err);
//       this.setState({
//         errorFeedback: 'failed to sign in'
//       })
//     }


//   }

  // sign in using fetch instead of axios
//   signInFetch = async (event) => {
//     event.preventDefault(); // prevent default form submission
//     const res = await fetch('http://localhost:3000/auth/login', {
//       method: 'POST',
//       body: JSON.stringify(this.state.credentials),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       credentials: 'include'
//     })

//     if (res.status === 200) {
//       // window.location = '../manage-users/manage-users.html';
//       this.props.history.push('/home');
//     } else {
//       console.log('failed to log in');
//       this.setState({
//         errorFeedback: 'failed to sign in'
//       })
//       // document.getElementById('inputPassword').value = '';
//       // document.getElementById('error-message').innerText = 'failed to login';
//     }
//   }

  render() {
    const {username, password} = this.props.login
    return (
        //onsubmit{this.login}
      <div className='terminal'>
      <form className="form-signin" onSubmit={this.login}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text"
          id="inputUsername"
          className="text-form"
          placeholder="Username"
          value={username}
          onChange={this.updateUsername}
          required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password"
          id="inputPassword"
          className="text-form"
          placeholder="Password"
          value={password}
          onChange={this.updatePassword}
          required />
        <p id="error-message">{this.props.login.feedbackMessage}</p>
        <button className="button-form" type="submit">Sign in</button>
      </form>
      </div>
    )
  }

}