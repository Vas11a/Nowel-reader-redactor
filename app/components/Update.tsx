'use client'
import React from 'react'
import axios from 'axios'
import { webUrl } from '../urls'
import { setLoading } from '../store/slices/mainSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'

export default function Delete() {
    const dispatch = useAppDispatch();
    const dataToUpdate = useAppSelector((state) => state.main)
    
    const updateData = async () => {
        if (dataToUpdate.sceneName.length === 0) {
            alert('Fill scene name')
            return
        }
        dispatch(setLoading(true))
        try {
            const resObj = {
                text: dataToUpdate.eventText,
                image: dataToUpdate.eventUrl,
                linkArray: dataToUpdate.options
            }
            const res = await axios.put(`${webUrl}scenes/${dataToUpdate.sceneName}`, resObj)
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
        <div onClick={updateData} className="save-btn bg-orange-400 border-orange-600 hover:bg-orange-600">
            Update
        </div>
    )
}
