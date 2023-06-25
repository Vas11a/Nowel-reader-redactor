'use client'
import ImgMain from "./components/ImgMain"
import EventUrl from "./components/EventUrl"
import EventText from "./components/EventText"
import SceneName from "./components/SceneName"
import OptionsUrl from "./components/OptionsUrl"
import LoadingMain from "./components/LoadingMain";
import Title from "./components/Title"
import DownButtonsBlock from './components/DownButtonsBlock'
import React from "react";

export default function Home() {
  
  return (
    <div className="main">
      <Title/>
      <LoadingMain/>
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


