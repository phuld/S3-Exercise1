import React from 'react'
import Check from '../../UI/Check/Check'
import Help from '../../UI/Help/Help'

const Enhancements = (props) => {
    const { enhance, handleClickCheck, handleChangeRange } = props
    const displayEnhance = enhance.map((item, index) => (
        <Check 
            key={index}
            title={item.title}
            on={item.on}
            value={item.value}
            handleClickCheck={handleClickCheck}
            handleChangeRange = {handleChangeRange}/>
    ))
    return (
        <div className="widget" id="micEnhance">
            <Help/>
            <div className="title">enhancements</div>
            {displayEnhance}
        </div >
    )
}

export default Enhancements