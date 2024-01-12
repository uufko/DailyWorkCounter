import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workCount: 0,
    priceCount: 0,
    workedDayList: [],
    controlArray: []
}

export const workSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setDayCount: (state, action) => {
            state.workCount = state.workCount + action.payload
        },
        setPriceCount: (state, action) => {
            state.priceCount = state.priceCount + action.payload
        },
        setWorkedDayList: (state, action) => {
            state.workedDayList.push(action.payload)
        },
        setControlArray: (state, action) => {
            state.controlArray.push(action.payload)
        },
        remove: (state) => {
            state.workCount = 0,
            state.priceCount = 0,
            state.workedDayList = []
            state.controlArray = []
        },
        getWorkCount: (state, action) => {
            state.workCount = action.payload
        },
        getPriceCount: (state, action) => {
            state.priceCount = action.payload
        },
        getWorkedDayList: (state, action) => {
            state.workedDayList = action.payload
            console.log(state.workedDayList);
        },
        getControlArray: (state, action) => {
            state.controlArray = action.payload
            console.log(state.controlArray);
        }
    }
})

export const { setDayCount, setPriceCount, setWorkedDayList, remove, setControlArray,
    getControlArray, getPriceCount, getWorkCount, getWorkedDayList
} = workSlice.actions
export default workSlice.reducer; //