import { useState } from 'react';
import "./Toggle.module.css"

export const Toggle = ({ labelLeft , labelRight, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <div className="toggler">
            <div >
                <label className='col-2'>
                    <strong>{labelLeft}</strong>
                </label>
            </div>
            <div>
                <label className='col-2'>
                    <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                    <span />
                    <strong>{labelRight}</strong>
                </label>
            </div>
            
        </div>
        
    )
}