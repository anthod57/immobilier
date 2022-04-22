import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { login, logout } = userSlice.actions
export const getUser = (state) => state.user
export default userSlice.reducer