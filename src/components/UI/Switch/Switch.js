import React from 'react'
import './Switch.scss'

const Switch = (props) => {
    const { on, handleClickSwitch } = props
    let classes = ['switch', 'switch-slider']

    if (on) classes.push('on')
    return (
        <div className={classes.join(' ')} onClick={() => handleClickSwitch(props.name)}>
            <div className="handle"></div>
        </div>
    )
}

export default Switch