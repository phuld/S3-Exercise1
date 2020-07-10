import React from 'react'
import './Range.scss'

const Range = (props) => {
    const { on, value, handleChangeRange } = props
    const classes = ['slider-container']
    if (on) classes.push('on')

    const handleChange = (e) => {
        handleChangeRange(e.target.value)
    }

    return (
        <div className={classes.join(' ')}>
            <div className="foot min">low</div>
            <div className="foot mid">medium</div>
            <div className="foot max">high</div>
            <div id="slPhoneFill" className="left" style={{ width: 8 + (value - 10) * 5.6 }}></div>
            <div className="track"></div>
            <div className="slider-tip" style={{ left: -6.74219 + (value - 10) * 5.6 }}>{value}</div>
            <input
                type="range"
                min="10"
                max="100"
                defaultValue={value}
                step="1"
                className="slider"
                id="slPhoneRange"
                onChange={handleChange}
                disabled={!on} />
        </div>
    )
}

export default Range