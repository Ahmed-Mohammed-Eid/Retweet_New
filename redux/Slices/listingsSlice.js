"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listings: [],
    pagination: {
        currentPage: null,
        hasNextPage: false,
        hasPreviousPage: false,
        itemsPerPage: 20,
        lastPage: 2,
        maxPrice: 300000,
        nextPage: null,
        previousPage: null,
        totalListings: 22,
    },
    searchQuery: "",
    searchListings: [],
    searchPagination: {
        currentPage: null,
        hasNextPage: false,
        hasPreviousPage: false,
        itemsPerPage: 20,
        lastPage: 2,
        maxPrice: 300000,
        nextPage: null,
        previousPage: null,
        totalListings: 22,
    }
};

export const listingsSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {
        setListings: (state, action) => {
            state.listings = action.payload;
        },
        setPagination: (state, action) => {
            state.pagination = action.payload;
        },
        setPaginationKey: (state, action) => {
            state.pagination[action.payload.key] = action.payload.value;
        },
        setSearchListings: (state, action) => {
            state.searchListings = action.payload;
        },
        setSearchPagination: (state, action) => {
            state.searchPagination = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload.query;
        }
    },
});

export const { setListings, setPagination, setPaginationKey, setSearchListings, setSearchPagination, setSearchQuery } = listingsSlice.actions

export default listingsSlice.reducer;