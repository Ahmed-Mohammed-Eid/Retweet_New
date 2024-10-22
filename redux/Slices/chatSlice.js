"use client"; //this is a client side component

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    creatorId: "",
    message: "",
    messages: [],
    sendersList: [],
    selectedUser: {
        id: "",
        fullName: "",
    },
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateCreatorId: (state, action) => {
            state.creatorId = action.payload;
        },
        updateMessage: (state, action) => {
            state.message = action.payload;
        },
        updateMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        updateSendersList: (state, action) => {
            state.sendersList = action.payload;
        },
        updateUserId: (state, action) => {
            state.userId = action.payload
        },
        updateSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
});

export const {
    updateCreatorId,
    updateMessage,
    updateMessages,
    addMessage,
    updateSendersList,
    updateUserId,
    updateSelectedUser,
} = chatSlice.actions

export default chatSlice.reducer;