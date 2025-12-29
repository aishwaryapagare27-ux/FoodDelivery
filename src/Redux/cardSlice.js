
import { createSlice } from "@reduxjs/toolkit";
 const cardslice=createSlice({
    name:"card",
 initialState:[],
 reducers:{
    AddItem:(state,action)=>{
     let existItem = state.find((item)=>item.id===action.payload.id)
     if(existItem){
    return state.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
     }else{
      state.push(action.payload)
     }
   },
    RemoveItem:(state, action)=>{
      return state.filter((item)=>item.id!==action.payload)
    },
    IncreamentQty:(state,action)=>{
      return state.map((item)=>item.id===action.payload?{...item,qty:item.qty+1}:item)
    },
    DecreamentQty:(state,action)=>{
      return state.map((item)=>item.id===action.payload?{...item,qty:item.qty-1}:item)
    },
 },

 })

 export const {AddItem, RemoveItem, IncreamentQty, DecreamentQty}= cardslice.actions
 export default cardslice.reducer
