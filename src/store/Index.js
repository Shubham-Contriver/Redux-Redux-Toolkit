import {configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter : 0},
    reducers : {
        increment(state,action){state.counter++},
        decrement(state,action){state.counter--},
        AddBy(state, action){state.counter += action.payload}
    }
})
export const action = counterSlice.actions
const store = configureStore({
    reducer : counterSlice.reducer
})
export default store;

// import {configureStore, createSlice} from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//     name : 'counter',
//     initialState :  { counter : 0},
//     reducers : {
//         increment (state, action)  {
//             state.counter++
//         },
//         decrement(state, action){state.counter--
//         },
//         AddBy(state,action){state.counter += action.payload},

//     }
// })
// export const action = counterSlice.actions;
// const store = configureStore({
//     reducer : counterSlice.reducer
// })
// export default store