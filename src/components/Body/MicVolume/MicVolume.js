import React, { Fragment } from 'react'
import Range from '../../UI/Range/Range'
import Switch from '../../UI/Switch/Switch'

const MicVolume = (props) => {
    const { micVolume, handleChangeRange, handleClickSwitch } = props
    return (
        <Fragment>
            <div className="title">
                microphone
                <Switch
                    name='micVolume'
                    on={micVolume.on}
                    handleClickSwitch={handleClickSwitch} />
            </div>
            <div className="h2-title">mic volume</div>
            <Range
                on={micVolume.on}
                value={micVolume.value}
                handleChangeRange={(value) => handleChangeRange({ type: 'micVolume', on: true, value })} />
        </Fragment>
    )
}

export default MicVolume