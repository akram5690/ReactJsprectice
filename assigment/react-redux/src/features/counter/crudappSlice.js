import { createSlice } from "@reduxjs/toolkit";

const crudappSlice = createSlice({
    name: "crudapp",
    initialState: [],
    reducers: {
        addemployee: (state, action) => {
            const {name, salary, designation, joindate} = action.payload;
            state.push({
                id: Date.now(),
                name,
                salary,
                designation,
                joindate
            })
        },

        deleteemployee: (state, action) => {
            return state.filter(emp => emp.id !== action.payload)
        },

        updateemployee: (state, action) => {
            const {id, updatedata} = action.payload;
            const index = state.findIndex(emp => emp.id === id);
            if (index !== -1) {
                state[index] = {...state[index], ...updatedata}                
            }
        }
    }
})

export const {addemployee, deleteemployee, updateemployee} = crudappSlice.actions;
export default crudappSlice.reducer