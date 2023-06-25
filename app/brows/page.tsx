'use client'
import SceneNameBrows from "../components/SceneNameBrows"
import ImgBrows from "../components/ImgBrows"
import OptionBlock from "./OptionBlock"
import { useAppSelector } from "../store/hooks"
import Loader from "../components/Loader"


export default function page() {
  const {text, isLoading} = useAppSelector((state) => state.brows)
  return (
    <div className="main">
        <h1 className="brows-title">Brows Nowel</h1>
        <div className="pt-5">
          <SceneNameBrows/>
          {isLoading && <Loader/>}
          <div className="text-now">{text}</div>
          <ImgBrows/>
          <OptionBlock/>
        </div>
    </div>
  )
}
