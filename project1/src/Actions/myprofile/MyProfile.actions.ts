import { ReimbursementType } from "../../models/reimbursementtype";
import { ReimbursementStatus } from "../../models/reimbursementstatus";
import { ersClient } from "../../Axios/ers.client";
import { Reimbursement } from "../../models/Reimbursement";


export const myProfileTypes = {

    NEW_AMOUNT: 'NEW_AMOUNT',
    NEW_DESCRIPTION: 'NEW_DESCRIPTION',
    NEW_STATUS: 'NEW_STATUS',
    NEW_TYPE: 'NEW_TYPE',
    NEW_REIMBURSEMENT: 'NEW_REIMBURSEMENT',
    BAD_NEW_REQUEST: 'BAD_NEW_REQUEST'
}


export const updateAmount = (amount: number) => {

    return {
        payload:{
            amount: amount
        },
        type: myProfileTypes.NEW_AMOUNT
    }

}

export const updateDescription = (description: string) => {

    return {
        payload:{
            description: description
        },
        type: myProfileTypes.NEW_DESCRIPTION
    }

}
export const updateStatus = (status: ReimbursementStatus) => {

    return {
        payload:{
            status: status
        },
        type: myProfileTypes.NEW_STATUS
    }

}

export const updateType = (type: ReimbursementType) => {

    return {
        payload:{
            type: type
        },
        type: myProfileTypes.NEW_TYPE
    }

}

export const updateReimbursement = (newReimbursement:Reimbursement) => async (dispatch ) => {
    

    try {
        const res = await ersClient.post(`/reimbursements`, newReimbursement);
        dispatch({
                  payload:{
                  },
                  type: myProfileTypes.NEW_REIMBURSEMENT
              })
        
      } catch (err) {
          //impediment, how to get api message from error
        console.log(err);
        dispatch({
                payload:{
                },
                type: myProfileTypes.BAD_NEW_REQUEST
            })
       
    }
}