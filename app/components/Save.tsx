'use client'
import React from 'react'
import axios from 'axios'
import { webUrl } from '../urls'
import { setLoading } from '../store/slices/mainSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'

export default function Delete() {
    const dispatch = useAppDispatch();
    const dataToSave = useAppSelector((state) => state.main)
    const saveData = async () => {
        if (dataToSave.sceneName.length === 0) {
            alert('Fill scene name')
            return
        }
        dispatch(setLoading(true))
        try {
            const resObj = {
                name: dataToSave.sceneName,
                text: dataToSave.eventText,
                image: dataToSave.eventUrl,
                linkArray: dataToSave.options
            }
            const res = await axios.post(`${webUrl}scenes`, resObj)
            if (res.status === 400) {
                alert(res.data.message)
                dispatch(setLoading(false))
                return
            }
            dispatch(setLoading(false))
        } catch (error) {
            alert('Server error')
            dispatch(setLoading(false))
        }
    }
    return (
        <div onClick={saveData} className="save-btn bg-yellow-400 border-yellow-600 hover:bg-yellow-600">
            Save
        </div>
    )
}
