import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: true,
}

const intro = createSlice({
    name: 'intro',
    initialState,
    reducers: {
        introShow: (state,payload) => {
            state.value=payload.payload
        },
    }
})
export const { introShow } = intro.actions

export default intro.reducer



