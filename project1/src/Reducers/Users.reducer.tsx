
import { Users } from "../models/Users";

import { IUsersState } from ".";
import { usersTypes } from "../Actions/users/Users.actions";

const initialState: IUsersState = {
  allUsers: []
}

export const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case usersTypes.GET_ALL:
      return {
        ...state,
        allUsers: action.payload.allUsers
      }
    case usersTypes.FAILED_USERS_REQUEST:
        return state;
  }
  return state;
}