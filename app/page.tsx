'use client';
import ImgMain from "./components/ImgMain"
import EventUrl from "./components/EventUrl"
import EventText from "./components/EventText"
import SceneName from "./components/SceneName"
import OptionsUrl from "./components/OptionsUrl"
import Loader from "./components/Loader"
import Title from "./components/Title"
import DownButtonsBlock from './components/DownButtonsBlock'
import { useAppSelector } from "./store/hooks"
import React from "react";

export default function Home() {
  const {isLoading} = useAppSelector((state) => state.main)
  return (
    <div className="main">
      <Title/>
      {isLoading  && <Loader/>}
      
      <SceneName/>
      <div className="pt-8">
        <EventText/>
        <EventUrl/>
      </div>
      <div className="img-field">
        <ImgMain/>
      </div>
        <OptionsUrl/>
      <div className="save-btn-block">
        <DownButtonsBlock/>
      </div>
    </div>
  )
}


