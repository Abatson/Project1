import { type } from "os";
import { ersClient } from "../../Axios/ers.client";
import { Users } from "../../models/Users";

export const loginTypes = {
    UPDATE_USERNAME: 'L_UPDATE_USERNAME',
    UPDATE_PASSWORD: 'L_UPDATE_PASSWORD',
    LOGIN: 'LOGIN',
    FAILED_LOGIN: 'FAILED_LOGIN',
    CLEAR_LOGIN_MESSAGE: 'CLEAR_LOGIN_MESSAGE'
  }
  
  export const clearMessage = () => {
    return {
        payload:{
        },
        type: loginTypes.CLEAR_LOGIN_MESSAGE
    }

}


export const updatePassword = (password:string) => {
    return {
        payload:{
            password
        },
        type: loginTypes.UPDATE_PASSWORD
    }

}

export const updateUsername = (username:string) => {
    return {
        payload:{
            username
        },
        type: loginTypes.UPDATE_USERNAME
    }

}

export const loginRequest = (username, password) => async (dispatch ) => {
    
    const credentials = {
        username: username,
        password: password
    }
    try {
      const res = await ersClient.post('/login', credentials);
      console.log(res)
      dispatch({
          payload:{
            user: res.data
          },
          type: loginTypes.LOGIN
      })
      
    } catch (err) {
        //impediment, how to get api message from error
      console.log(err);
      dispatch({
        payload:{
        },
        type: loginTypes.FAILED_LOGIN
    })
      
      
    }
  
  }

//   export const buyJoke = () => async (dispatch) => {
//     try {
//       const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
//       const body = await resp.json();
  
//       const joke = body.value.joke;
//       dispatch({
//         payload: {
//           joke
//         },
//         type: chuckNorrisTypes.BUY_JOKE
//       })
//     } catch (err) {
//       console.log(err);
//     }
  