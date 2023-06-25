'use client'
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setName } from "../store/slices/browsSlice";
import { setScene, setLoading } from "../store/slices/browsSlice";
import axios from "axios";
import { webUrl } from "../urls";

export default function SceneNameBrows() {
    const dispatch = useAppDispatch();
    const {name, isLoading} = useAppSelector((state) => state.brows)

    const getScene = async (name : string) => {
        dispatch(setLoading(true))
        console.log(isLoading)
        try {
            const res = await axios.get(`${webUrl}scenes/${name}`)
            if (res.status === 400) {
                alert(res.data.message)
                dispatch(setLoading(false))
                return
            }
            dispatch(setScene(res.data));
            dispatch(setLoading(false))
    
        } catch (error) {
            alert('Server error')
            dispatch(setLoading(false))
        }
    }

    
    return (
        <div className="block-main-title">
            <div className="title">Enter scene name: </div>
            <input type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))}  className="title-input" placeholder="name" />
            <div onClick={() => getScene(name)}  className="title-find">Find</div>
        </div>
    )
}
