'use client'
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setEventText } from "../store/slices/mainSlice";


export default function EventText() {
    const dispatch = useAppDispatch();
    const {eventText} = useAppSelector((state) => state.main)
    return (
        <div className="event-input-block">
            <div className="font-bold text-xl">
                Enter event text:
            </div>
            <input type="text" value={eventText} onChange={(e) => dispatch(setEventText(e.target.value))} placeholder="event" className="event-input" />
        </div>
    )
}
