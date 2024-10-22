"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: "",
    subCategoryId: "",
    item: "",
    selectedLocation: "",
    priceRange: [],
    page: 1,
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        updateFilterStates: (state, action) => {
            state.priceRange = action.payload.priceRange || state.priceRange;
            state.categoryId = action.payload.categoryId || state.categoryId;
            state.subCategoryId = action.payload.subCategoryId || state.subCategoryId
            state.selectedLocation = action.payload.selectedLocation || state.selectedLocation;
            state.item = action.payload.item || state.item;
            state.page = action.payload.page || state.page;
        },
        returnToInitialState: (state) => {
            state.priceRange = initialState.priceRange;
            state.categoryId = initialState.categoryId;
            state.subCategoryId = initialState.subCategoryId;
            state.selectedLocation = initialState.selectedLocation;
            state.item = initialState.item;
            state.page = initialState.page;
        },
        clearSpecificFields: (state, action) => {
            action.payload.forEach((field) => {
                state[field] = initialState[field];
            });
        }
    },
});

export const { updateFilterStates, returnToInitialState, clearSpecificFields } = filterSlice.actions

export default filterSlice.reducer;