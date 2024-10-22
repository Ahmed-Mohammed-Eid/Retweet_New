"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import mainLayoutSlice from "./Slices/mainLayoutSlice";
import homeSlice from "./Slices/homeSlice";
import listingsSlice from "./Slices/listingsSlice";
import filterSlice from "./Slices/filterSlice";
import chatSlice from "./Slices/chatSlice";

const rootReducer = combineReducers({
    mainLayout: mainLayoutSlice,
    home: homeSlice,
    listings: listingsSlice,
    filter: filterSlice,
    chat: chatSlice,
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,
});