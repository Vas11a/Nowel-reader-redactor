'use client'
import SceneNameBrows from "../components/SceneNameBrows"
import ImgBrows from "../components/ImgBrows"
import OptionBlock from "./OptionBlock"
import TextAndLoading from "./TextAndLoading"


export default function page() {
  
  return (
    <div className="main">
        <h1 className="brows-title">Brows Nowel</h1>
        <div className="pt-5">
          <SceneNameBrows/>
          <TextAndLoading/>
          <ImgBrows/>
          <OptionBlock/>
        </div>
    </div>
  )
}
