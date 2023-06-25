'use client'
import React from 'react'
import Loader from './Loader'
import { useAppSelector } from '../store/hooks'

export default function LoadingMain() {
    const {isLoading} = useAppSelector((state) => state.main)
  return (
    <>
        {isLoading  && <Loader/>}
    </>
  )
}
