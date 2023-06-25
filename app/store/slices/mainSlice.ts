'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Option = {
  text: string;
  nextScene: string;
};

type typesInitialState = {
  isLoading: boolean
  sceneName: string
  eventText: string
  eventUrl: string
  options: Option[]
  page: 1 | 2 | 3
}

const initialState: typesInitialState = {
    isLoading: false,
    sceneName: '',
    eventText: '',
    eventUrl: '',
    options: [],
    page: 1
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSceneName(state, action:PayloadAction<string>) {
      state.sceneName = action.payload
    } ,
    setEventText(state, action:PayloadAction<string>) {
      state.eventText = action.payload
    }, 
    setEventUrl(state, action:PayloadAction<string>) {
      state.eventUrl = action.payload
    },
    changeOption(state, action:PayloadAction<{idx:number, text:string}>) {
      state.options[action.payload.idx].text = action.payload.text
    },
    changeUrl(state, action:PayloadAction<{idx:number, text:string}>) {
      state.options[action.payload.idx].nextScene = action.payload.text
    },
    removeOption(state, action:PayloadAction<number>) {
      state.options.splice(action.payload, 1)
    },
    addOption(state) {
      state.options.push({text:'', nextScene:''})
    },
    setOptions(state, action:PayloadAction<Option[]>) {
      state.options = action.payload
    },
    setLoading(state, action:PayloadAction<boolean>){
      state.isLoading = action.payload
    }
    

  },
});

export const {setSceneName,
              setEventText, 
              setEventUrl, 
              changeOption, 
              changeUrl,
              removeOption,
              addOption,
              setOptions,
              setLoading } = mainSlice.actions;

export default mainSlice.reducer;