import React, { Fragment } from 'react'
import Range from '../../UI/Range/Range'
import Switch from '../../UI/Switch/Switch'

const MicSensitivity = (props) => {
    const { micSensitivity, handleChangeRange, handleClickSwitch } = props

    return (
        <Fragment>
            <div className="h2-title mt20">
                mic sensitivity
                <Switch
                    name='micSensitivity'
                    on={micSensitivity.on}
                    handleClickSwitch={handleClickSwitch} />
            </div>
            <div className="h2-body">Adjust this setting to remove unwanted background noise or increase the amount of mic output heard</div>
            <Range
                on={micSensitivity.on}
                value={micSensitivity.value}
                handleChangeRange={(value) => handleChangeRange({ type: 'micSensitivity', on: true, value })} />
        </Fragment>
    )
}

export default MicSensitivity