'use client'
import axios from 'axios';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setSceneName,setEventText, setEventUrl, setOptions, setLoading } from "../store/slices/mainSlice";
import { webUrl } from '../urls';


export default function SceneName() {
    const dispatch = useAppDispatch();
    const {sceneName} = useAppSelector((state) => state.main)

    const getScena = async () => {
        dispatch(setLoading(true))
        try {
            const res = await axios.get(`${webUrl}scenes/${sceneName}`)
            if (res.status === 400) {
                alert(res.data.message)
                dispatch(setLoading(false))
                return
            }
            dispatch(setEventText(res.data.text))
            dispatch(setEventUrl(res.data.image))
            dispatch(setOptions(res.data.linkArray))
            dispatch(setLoading(false))
        } catch (error) {
            alert('Server error')
            dispatch(setLoading(false))
        }
    }


    return (
        <div className="block-main-title">
            <div className="title">Enter scene name: </div>
            <input type="text" value={sceneName} onChange={(e) => dispatch(setSceneName(e.target.value))} className="title-input" placeholder="name" />
            <div onClick={getScena} className="title-find">Find</div>
        </div>
    )
}
