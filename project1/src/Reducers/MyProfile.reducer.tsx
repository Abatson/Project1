
import {  IMyProfileState } from ".";
import { reimbursementTypes } from "../Actions/reimbursements/Reimbursements.actions";
import { Reimbursement } from "../models/Reimbursement";
import { myProfileTypes } from "../Actions/myprofile/MyProfile.actions";


const initialState: IMyProfileState = {
    newReimbursement: new Reimbursement,
    postRequestMessage: ''
}

export const myProfileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    
    case myProfileTypes.NEW_AMOUNT:
      return{
        ...state,
        newReimbursement:{
          ...state.newReimbursement,
          amount: action.payload.amount
        }
      }
    case myProfileTypes.NEW_DESCRIPTION:
      return{
        ...state,
        newReimbursement:{
          ...state.newReimbursement,
          description: action.payload.description
        }
      }
    case myProfileTypes.NEW_STATUS:
      return{
        ...state,
        newReimbursement:{
          ...state.newReimbursement,
          status: action.payload.status
        }
      }
    case myProfileTypes.NEW_TYPE:
      return{
        ...state,
        newReimbursement:{
          ...state.newReimbursement,
          type: action.payload.type
        }
      }
    case myProfileTypes.NEW_REIMBURSEMENT:
      return{
        ...state,
        newReimbursement: new Reimbursement,
        postRequestMessage: 'Successfully Added Request'
      } 
    case myProfileTypes.BAD_NEW_REQUEST:
        return {
            ...state,
            newReimbursement: new Reimbursement,
            postRequestMessage: 'Failed to Add Request'
          }   
  }
  return state;
}