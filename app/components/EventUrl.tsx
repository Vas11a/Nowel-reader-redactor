'use client'
import React from 'react'
import { useAppDispatch } from "../store/hooks"
import { setEventUrl } from "../store/slices/mainSlice"


export default function EventUrl() {
    const [url, setUrl] = React.useState('')
    const dispatch = useAppDispatch();

    const loadUrl = () => {
        dispatch(setEventUrl(url))
    }

    return (
        <div className="url-input-block">
            <div className=" font-bold text-xl ">
                Enter image url:
            </div>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="image url" className="url-input" />

            <div onClick={loadUrl} className="load-button">
                Load
            </div>
        </div>
    )
}
