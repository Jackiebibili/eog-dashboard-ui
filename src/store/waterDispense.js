import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
   name: "allocation",
   initialState: {
      list: []
   },
   reducers: {
      allocationReceived: (alloc, action) => {
         const { payload } = action;
         alloc.list = payload
      }
   }
})

export const {
   allocationReceived
} = slice.actions;

export default slice.reducer;

export const getAllocationList = createSelector((state) => state.allocation, alloc => alloc);