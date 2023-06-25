'use client'
import React from 'react'
import axios from 'axios'
import { webUrl } from '../urls'
import { setLoading } from '../store/slices/mainSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'

export default function Delete() {
    const dispatch = useAppDispatch();
    const {sceneName} = useAppSelector((state) => state.main)
    const deleteScena = async () => {
        if (sceneName.length === 0) {
            alert('Enter scene name')
            return
        }
        dispatch(setLoading(true))
        try {
            const res = await axios.delete(`${webUrl}scenes/${sceneName}`)
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
        <div onClick={deleteScena} className="save-btn bg-red-400 border-red-600 hover:bg-red-600">
            Delete
        </div>
    )
}
