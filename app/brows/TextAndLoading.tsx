'use client'
import React from 'react'
import Loader from '../components/Loader'
import { useAppSelector } from '../store/hooks'


export default function TextAndLoading() {
    const { text, isLoading } = useAppSelector((state) => state.brows)
    return (
        <>
            {isLoading && <Loader />}
            <div className="text-now">{text}</div></>
    )
}
