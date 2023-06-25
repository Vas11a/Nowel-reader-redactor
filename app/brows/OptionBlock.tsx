import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setScene, setLoading } from '../store/slices/browsSlice';
import axios from 'axios';
import { webUrl } from '../urls';

export default function OptionBlock() {
    const {linkArray} = useAppSelector((state) => state.brows)
    const dispatch = useAppDispatch();

    const getScene = async (name : string) => {
        dispatch(setLoading(true))
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
        <div className="options-brows">
            {
                linkArray.map((elem, idx) => (
                    <div onClick={() => getScene(elem.nextScene)} key={idx} className="option-brows">{elem.text}</div>
                ))
            }
            
        </div>
    )
}
