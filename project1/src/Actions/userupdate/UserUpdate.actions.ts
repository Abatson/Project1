
import { ersClient } from "../../Axios/ers.client";
import { Roles } from "../../models/Roles";
import { Users } from "../../models/Users";



export const userUpdateTypes = {

    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_ROLE: 'UPDATE_ROLE',
    UPDATE_USER: 'UPDATE_USER',
    SET_UPDATE_USER_ID: 'SET_UPDATE_USER_ID',
    BAD_USER_PATCH: 'BAD_USER_PATCH'
}


export const updateUsername = (username:string) => {

    return {
        payload:{
            username: username
        },
        type: userUpdateTypes.UPDATE_USERNAME
    }

}

export const updateFirstName = (firstName:string) => {

    return {
        payload:{
            firstName: firstName
        },
        type: userUpdateTypes.UPDATE_FIRST_NAME
    }

}
export const updateLastName = (lastName:string) => {

    return {
        payload:{
            lastName: lastName
        },
        type: userUpdateTypes.UPDATE_LAST_NAME
    }

}

export const updateEmail = (email:string) => {

    return {
        payload:{
            email: email
        },
        type: userUpdateTypes.UPDATE_EMAIL
    }

}

export const updateRole = (role:Roles) => {

    return {
        payload:{
            role: role
        },
        type: userUpdateTypes.UPDATE_ROLE
    }

}

export const setUserId = (userId:number) => {

    return {
        payload:{
            userId: userId
        },
        type: userUpdateTypes.SET_UPDATE_USER_ID
    }

}

export const updateUser = (newUser:Users) => async (dispatch ) => {
    

    try {
        const res = await ersClient.patch(`/users`, newUser);
        dispatch({
                  payload:{
                  },
                  type: userUpdateTypes.UPDATE_USER
              })
        
      } catch (err) {
          //impediment, how to get api message from error
        console.log(err);
        dispatch({
                payload:{
                },
                type: userUpdateTypes.BAD_USER_PATCH
            })
       
    }
}