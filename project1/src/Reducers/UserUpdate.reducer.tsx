
import {   IUserUpdateState } from ".";



import { Users } from "../models/Users";
import { userUpdateTypes } from "../Actions/userupdate/UserUpdate.actions";


const initialState: IUserUpdateState = {
    updatedUser: new Users,
    postUserRequestMessage: ''
}

export const userUpdateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    
    case userUpdateTypes.SET_UPDATE_USER_ID:
      return{
        ...state,
        updatedUser:{
          ...state.updatedUser,
          userId: action.payload.userId
        }
      }
    case userUpdateTypes.UPDATE_USERNAME:
      return{
        ...state,
        updatedUser:{
          ...state.updatedUser,
          username: action.payload.username
        }
      }
    case userUpdateTypes.UPDATE_FIRST_NAME:
      return{
        ...state,
        updatedUser:{
          ...state.updatedUser,
          firstName: action.payload.firstName
        }
      }
    case userUpdateTypes.UPDATE_LAST_NAME:
      return{
        ...state,
        updatedUser:{
          ...state.updatedUser,
          lastName: action.payload.lastName
        }
      }
      case userUpdateTypes.UPDATE_EMAIL:
      return{
        ...state,
        updatedUser:{
          ...state.updatedUser,
          email: action.payload.email
        }
      }
      case userUpdateTypes.UPDATE_ROLE:
      return{
        ...state,
        updatedUser:{
          ...state.updatedUser,
          role: action.payload.role
        }
      }
    case userUpdateTypes.UPDATE_USER:
      return{
        ...state,
        updatedUser: new Users,
        postRequestMessage: 'Successfully Added Request'
      } 
    case userUpdateTypes.BAD_USER_PATCH:
        return {
            ...state,
            updatedUser: new Users,
            postRequestMessage: 'Failed to Add Request'
          }   
  }
  return state;
}