'use client'
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { changeOption, changeUrl, removeOption, addOption } from "../store/slices/mainSlice";


export default function OptionsUrl() {
    const dispatch = useAppDispatch();
    const { options } = useAppSelector((state) => state.main)
    return (
        <>
            <div className="addOption-block">
                <div onClick={() => dispatch(addOption())} className="addOption">Add option</div>
            </div>
            
            {
                options.map((elem, idx) => (
                    <div key={elem.text+idx} className="option-block">
                        <input type="text" value={elem.text} onChange={(e)=> dispatch(changeOption({idx: idx, text:e.target.value}))} placeholder="options" className="option" />
                        <input type="text" value={elem.nextScene} onChange={(e)=> dispatch(changeUrl({idx: idx, text:e.target.value}))} placeholder="scene url" className="option" />
                        <div onClick={() => dispatch(removeOption(idx))} className="remove-options">x</div>
                    </div>
                ))
            }

        </>
    )
}
