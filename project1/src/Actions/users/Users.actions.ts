import { ersClient } from "../../Axios/ers.client";
import { Users } from "../../models/Users";


export const usersTypes = {
    GET_ALL: "U_GET_ALL",
    FAILED_USERS_REQUEST: "FAILED_USER_REQUEST"
}



export const getAllUsers = () => async (dispatch ) => {
    

    try {
        const res = await ersClient.get('/users');
        let allUsers:Users[]  = res.data;
        dispatch({
                  payload:{
                    allUsers: allUsers
                  },
                  type: usersTypes.GET_ALL
              })
        
      } catch (err) {
          //impediment, how to get api message from error
        console.log(err);
        dispatch({
                payload:{
                },
                type: usersTypes.FAILED_USERS_REQUEST
            })
       
    }
   
    // try {
    //   const res = await ersClient.post('/login', credentials);
    //   console.log(res)
    //   dispatch({
    //       payload:{
    //         user: res.data
    //       },
    //       type: loginTypes.LOGIN
    //   })
      
    // } catch (err) {
    //     //impediment, how to get api message from error
    //   console.log(err);
    //   dispatch({
    //     payload:{
    //     },
    //     type: loginTypes.FAILED_LOGIN
    // })
      
      
    // }
  
  }


