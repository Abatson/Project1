import { ILoginState } from ".";
import { Users } from "../models/Users";
import { loginTypes } from "../Actions/login/Login.actions";
import { Link } from "react-router-dom";

const initialState: ILoginState = {
  user: new Users,
  username: '',
  password: '',
  feedbackMessage: '',
}

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    case loginTypes.UPDATE_USERNAME:
    return {
        ...state,
        username: action.payload.username
    }
    case loginTypes.CLEAR_LOGIN_MESSAGE:
    return {
        ...state,
        feedbackMessage: ''
    }
    case loginTypes.LOGIN:{
        const password = '';
        const username = '';
        return {
            ...state,
            user: action.payload.user,
            feedbackMessage: 'YOU DID IT!',
            username: username,
            password: password

        }
    } 
    case loginTypes.FAILED_LOGIN: {
        const password = '';
        const username = '';
        return {
            ...state,
            username: username,
            password: password,
            feedbackMessage: 'Incorrect Username or Password'
        }

    }
  }
  return state;
}