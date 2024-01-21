import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    username: null,
    userId: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
        SET_ACTIVE_USER: (state, action) => {
            console.log(action.payload);
            state.isLoggedIn = true
            state.email = action.payload.email
            state.username = action.payload.userName
            state.userId = action.payload.userID
        },
        REMOVE_ACTIVE_USER: (state, action) => {
            state.isLoggedIn = false
            state.email = null
            state.username = null
            state.userId = null
        }
  }
});

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectEmail = (state) => state.auth.email
export const selectUsername = (state) => state.auth.username
export const selectUserId = (state) => state.auth.userId

export default authSlice.reducer