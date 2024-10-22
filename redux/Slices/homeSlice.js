
"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    advertisements: {},
    clientsAds: {},
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        updateAdvertisements: (state, action) => {
            state.advertisements = action.payload;
        },
        updateClientsAds: (state, action) => {
            state.clientsAds = action.payload;
        },
    },
});

export const { updateAdvertisements, updateClientsAds } = homeSlice.actions

export default homeSlice.reducer;