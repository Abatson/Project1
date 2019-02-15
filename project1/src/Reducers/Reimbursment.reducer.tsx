
import {  IReimbursementState } from ".";
import { reimbursementTypes } from "../Actions/reimbursements/Reimbursements.actions";
import { Reimbursement } from "../models/Reimbursement";


const initialState: IReimbursementState = {
    userIdReimbursements: [],
    statusIdReimbursements: [],
    statusId: 0,
    updatedReimbursement: new Reimbursement,
}

export const reimbursementReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case reimbursementTypes.GET_BY_USER_ID:
      return {
        ...state,
        userIdReimbursements: action.payload.userIdReimbursements
      }
    case reimbursementTypes.BAD_REIMBURSEMENT_REQUEST:
        return state;
    case reimbursementTypes.GET_BY_STATUS_ID:
      return {
        ...state,
        statusIdReimbursements: action.payload.statusIdReimbursements
      }
    case reimbursementTypes.SET_STATUS_ID:
      return{
        ...state,
        statusId: action.payload.statusId,
        statusIdReimbursements: []
      }
    case reimbursementTypes.UPDATE_AMOUNT:
      return{
        ...state,
        updatedReimbursement:{
          ...state.updatedReimbursement,
          amount: action.payload.amount
        }
      }
    case reimbursementTypes.UPDATE_DESCRIPTION:
      return{
        ...state,
        updatedReimbursement:{
          ...state.updatedReimbursement,
          description: action.payload.description
        }
      }
    case reimbursementTypes.UPDATE_STATUS:
      return{
        ...state,
        updatedReimbursement:{
          ...state.updatedReimbursement,
          status: action.payload.status
        }
      }
    case reimbursementTypes.UPDATE_TYPE:
      return{
        ...state,
        updatedReimbursement:{
          ...state.updatedReimbursement,
          type: action.payload.type
        }
      }
    case reimbursementTypes.SET_REIMBURSEMENT_ID:
      return{
        ...state,
        updatedReimbursement:{
          ...state.updatedReimbursement,
          reimbursementId: action.payload.reimbursementId
        }
      }
    case reimbursementTypes.UPDATE_REIMBURSEMENT:
      return{
        ...state,
        updatedReimbursement: new Reimbursement
      }    
  }
  return state;
}