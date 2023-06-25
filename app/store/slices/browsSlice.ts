'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Option = {
    text: string;
    nextScene: string;
}

type typesInitialState = {
    name: string;
    text:string;
    image: string;
    linkArray: Option[],
    isLoading?: boolean;
}

const initialState: typesInitialState = {
    name: '',
    text: '',
    image: '',
    linkArray: [],
    isLoading: false
};

export const browsSlice = createSlice({
  name: 'brows',
  initialState,
  reducers: {
    setLoading(state, action:PayloadAction<boolean>) {
        state.isLoading = action.payload
    },
    setScene(state, action:PayloadAction<typesInitialState>) {
        state.image = action.payload.image
        state.linkArray = action.payload.linkArray
        state.text = action.payload.text
    },
    setName(state, action:PayloadAction<string>) {
        state.name = action.payload
    }
  },
});

export const {setLoading, setScene, setName} = browsSlice.actions;

export default browsSlice.reducer;