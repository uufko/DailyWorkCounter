import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workCount: null,
    priceCount: null,
    workedDayList: [],
    controlArray: [],
    priceState:0,
    backColor:"",
    compColor:"",
    textColor:"",
    themeState:false,
    theme:true,
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
        },
        getControlArray: (state, action) => {
            state.controlArray = action.payload
        },
        setPriceState:(state,action) =>{
            state.priceState = parseInt(action.payload)
        },
        setListState:(state, action) =>{
            state.workedDayList[action.payload].state=!state.workedDayList[action.payload].state
        },
        deleteListItem:(state, index) =>{
            state.workCount = state.workCount - state.workedDayList[index.payload].workCount
            console.log(state.workedDayList[index.payload].workCount);
            if(state.workedDayList[index.payload].workCount==1){
                state.priceCount= state.priceCount - state.priceState
            }else{
                state.priceCount= state.priceCount - state.priceState/2
            }
            state.workedDayList.splice(index.payload,1)
            state.controlArray.splice(index.payload,1)
        }
    }
})

export const { setDayCount, setPriceCount, setWorkedDayList, remove, setControlArray,deleteListItem,
    getControlArray, getPriceCount, getWorkCount, getWorkedDayList,setPriceState, setListState
} = workSlice.actions
export default workSlice.reducer; //
