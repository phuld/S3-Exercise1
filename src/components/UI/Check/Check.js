import React, { Fragment } from 'react'
import Range from '../Range/Range'

const Check = (props) => {
    const { title, on, value, handleClickCheck, handleChangeRange } = props
    return (
        <Fragment>
            <div className="check-item">
                <input
                    type="checkbox"
                    checked={on} />
                <label htmlFor="checkNorm" className="check-box" onClick={() => handleClickCheck(title)}>
                    <div className="check-text">{title}</div>
                </label>
            </div>
            <Range
                on={on}
                value={value} 
                handleChangeRange={(value) => handleChangeRange({ type: 'enhance', title: title, on: true, value })} />
        </Fragment>
    )
}

export default Check