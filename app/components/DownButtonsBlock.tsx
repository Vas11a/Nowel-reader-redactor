import React from 'react'
import Save from './Save'
import Update from './Update'
import Delete from './Delete'

export default function DownButtonsBlock() {
  return (
    <div className='flex gap-3'>
        <Save/>
        <Update/>
        <Delete/>
    </div>
  )
}
