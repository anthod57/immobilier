import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    props: {},
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setProps: (state, action) => {
            state.props = {...state.props, ...action.payload}
        },
        clearProps: (state, action) => {
            state.props = {}
        },
    }
});

export const { setProps, clearProps } = searchSlice.actions
export const getProps = (state) => state.props;
export default searchSlice.reducer