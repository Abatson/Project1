import { combineReducers } from "redux";
import { Users } from "../models/Users";
import {loginReducer} from './Login.reducer'
import { usersReducer } from "./Users.reducer";
import { Reimbursement } from "../models/Reimbursement";
import { reimbursementReducer } from "./Reimbursment.reducer";
import { myProfileReducer } from "./MyProfile.reducer";
import { userUpdateReducer } from "./UserUpdate.reducer";

export interface ILoginState{
    user: Users,
    username: string,
    password: string,
    feedbackMessage: string
}

export interface IUsersState{
    allUsers:Users[];
}

export interface IReimbursementState{
    userIdReimbursements:Reimbursement[],
    statusIdReimbursements:Reimbursement[],
    statusId: number,
    updatedReimbursement:Reimbursement
}

export interface IMyProfileState{
    newReimbursement:Reimbursement,
    postRequestMessage: string
}

export interface IUserUpdateState{
    updatedUser:Users,
    postUserRequestMessage:string,
}

export interface IState {
    login: ILoginState,
    users: IUsersState,
    reimbursement: IReimbursementState,
    myProfile: IMyProfileState,
    userUpdate: IUserUpdateState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    users: usersReducer,
    reimbursement: reimbursementReducer,
    myProfile: myProfileReducer,
    userUpdate: userUpdateReducer
})