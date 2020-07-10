import React, { Fragment } from 'react'
import Range from '../../UI/Range/Range'
import Switch from '../../UI/Switch/Switch'

const SideTone = (props) => {
    const { sideTone, handleClickSwitch, handleChangeRange } = props
    return (
        <Fragment>
            <div className="title">
                sidetone
                <Switch
                    name='sideTone'
                    on={sideTone.on}
                    handleClickSwitch={handleClickSwitch} />
            </div>
            <Range
                on={sideTone.on}
                value={sideTone.value}
                handleChangeRange={(value) => handleChangeRange({ type: 'sideTone', on: true, value })} />
        </Fragment>
    )
}

export default SideTone