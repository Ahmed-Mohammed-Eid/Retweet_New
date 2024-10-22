"use client"; //this is a client side component

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInformation: {
        fullName: '',
        phoneNumber: '',
        email: '',
        image: '',
        userId: '',
        hasProfile: false,
    },
    userCountryInformation: {},
    isAuthenticated: false,
    notifications: {
        hasNotifications: false,
        notificationCount: 0,
    },
};

export const counterSlice = createSlice({
    name: "mainLayout",
    initialState,
    reducers: {
        updateUserInformation: (state, action) => {
            state.userInformation = action.payload;
        },
        updateUserCountryInformation: (state, action) => {
            state.userCountryInformation = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        updateNotifications: (state, action) => {
            state.notifications = action.payload;
        }
    },
});

export const {
    updateUserInformation,
    updateUserCountryInformation,
    setIsAuthenticated,
    updateNotifications,
} = counterSlice.actions

export default counterSlice.reducer;