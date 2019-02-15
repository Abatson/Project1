import { ersClient } from "../../Axios/ers.client";
import { Users } from "../../models/Users";
import { Reimbursement } from "../../models/Reimbursement";
import { ReimbursementStatus } from "../../models/reimbursementstatus";
import { ReimbursementType } from "../../models/reimbursementtype";


export const reimbursementTypes = {
    GET_BY_USER_ID: 'GET_BY_USER_ID',
    BAD_REIMBURSEMENT_REQUEST: 'BAD_REIMBURSEMENT_REQUEST',
    GET_BY_STATUS_ID: 'GET_BY_STATUS_ID',
    SET_STATUS_ID: 'SET_STATUS_ID',
    UPDATE_AMOUNT: 'UPDATE_AMOUNT',
    UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
    UPDATE_STATUS: 'UPDATE_STATUS',
    UPDATE_TYPE: 'UPDATE_TYPE',
    UPDATE_REIMBURSEMENT: 'UPDATE_REIMBURSEMENT',
    SET_REIMBURSEMENT_ID: 'SET_REIMBURSEMENT_ID',
    DIRTY_REIMBURSEMENT: 'DIRTY REIMBURSEMENT',
    CLEAN_REIMBURSEMENT: 'CLEAN_REIMBURSEMENT',
}



export const getReimbursementByUId = (userid:number) => async (dispatch ) => {
    

    try {
        const res = await ersClient.get(`/reimbursements/author/userId/${userid}`);
        let userIdReimbursements:Reimbursement[]  = res.data;
        for (const key of userIdReimbursements) {
            console.log(key.dateResolved)
            if(key.dateResolved === '1970-01-01T00:00:00.000Z'){
                key.dateResolved = ''
            }
        }
        dispatch({
                  payload:{
                    userIdReimbursements: userIdReimbursements
                  },
                  type: reimbursementTypes.GET_BY_USER_ID
              })
        
      } catch (err) {
          //impediment, how to get api message from error
        console.log(err);
        dispatch({
                payload:{
                },
                type: reimbursementTypes.BAD_REIMBURSEMENT_REQUEST
            })
       
    }
}

export const getReimbursementByStatusId = (status:number) => async (dispatch ) => {
    

    try {
        const res = await ersClient.get(`/reimbursements/status/${status}`);
        let statusIdReimbursements:Reimbursement[]  = res.data;
        for (const key of statusIdReimbursements) {
            console.log(key.dateResolved)
            if(key.dateResolved === '1970-01-01T00:00:00.000Z'){
                key.dateResolved = ''
            }
        }
        dispatch({
                  payload:{
                    statusIdReimbursements: statusIdReimbursements
                  },
                  type: reimbursementTypes.GET_BY_STATUS_ID
              })
        
      } catch (err) {
          //impediment, how to get api message from error
        console.log(err);
        dispatch({
                payload:{
                },
                type: reimbursementTypes.BAD_REIMBURSEMENT_REQUEST
            })
       
    }
}

export const setStatusId = (status: number) => {

    return {
        payload:{
            statusId: status
        },
        type: reimbursementTypes.SET_STATUS_ID
    }

}

export const updateAmount = (amount: number) => {

    return {
        payload:{
            amount: amount
        },
        type: reimbursementTypes.UPDATE_AMOUNT
    }

}

export const updateDescription = (description: string) => {

    return {
        payload:{
            description: description
        },
        type: reimbursementTypes.UPDATE_DESCRIPTION
    }

}
export const updateStatus = (status: ReimbursementStatus) => {

    return {
        payload:{
            status: status
        },
        type: reimbursementTypes.UPDATE_STATUS
    }

}

export const updateType = (type: ReimbursementType) => {

    return {
        payload:{
            type: type
        },
        type: reimbursementTypes.UPDATE_TYPE
    }

}

export const setReimbursementId = (reimbursementId: number) => {

    return {
        payload:{
            reimbursementId: reimbursementId
        },
        type: reimbursementTypes.SET_REIMBURSEMENT_ID
    }

}

export const updateReimbursement = (updatedReimbursement:Reimbursement) => async (dispatch ) => {
    

    try {
        const res = await ersClient.patch(`/reimbursements`, updatedReimbursement);
        dispatch({
                  payload:{
                      dirtyRBit: true
                  },
                  type: reimbursementTypes.UPDATE_REIMBURSEMENT
              })
        
      } catch (err) {
          //impediment, how to get api message from error
        console.log(err);
        dispatch({
                payload:{
                },
                type: reimbursementTypes.BAD_REIMBURSEMENT_REQUEST
            })
       
    }
}