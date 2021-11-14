import {createSlice, createSelector} from "@reduxjs/toolkit";

const slice = createSlice({
   name: "result",
   initialState: {
      incrementalValue: 0,
      valuePerDay: 0,
      flowIn: 0,
      totalFlowToOperations: 0,
   },
   reducers: {
      resultReceived: (alloc, action) => {
         const {payload} = action;
         alloc.incrementalValue = payload.incrementalValue;
         alloc.valuePerDay = payload.valuePerDay;
         alloc.flowIn = payload.flowIn;
         alloc.totalFlowToOperations = payload.totalFlowToOperations;
      }
   }
})

export const {
   resultReceived
} = slice.actions;

export default slice.reducer;

export const getRevenueResult = createSelector((state) => state.result, result => result);
