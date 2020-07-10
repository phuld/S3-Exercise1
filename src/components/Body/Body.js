import React, { Component } from 'react'
import './Body.scss'
import MicVolume from './MicVolume/MicVolume';
import MicSensitivity from './MicSensitivity/MicSensitivity';
import SideTone from './SideTone/SideTone';
import Enhancements from './Enhancements/Enhancements';
import Help from '../UI/Help/Help';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            micVolume: {
                on: true,
                value: '55'
            },
            micSensitivity: {
                on: true,
                value: '55'
            },
            sideTone: {
                on: false,
                value: '50'
            },
            enhance: [
                {
                    title: 'Volume Normalization',
                    on: false,
                    value: '50'
                },
                {
                    title: 'Ambient Noise Reduction',
                    on: false,
                    value: '50'
                },
                {
                    title: 'Voice Clarity',
                    on: false,
                    value: '50'
                },
            ]
        };
    }

    handleClickSwitch = (item) => {
        const updateItem = this.state[item]
        updateItem.on = !updateItem.on
        this.setState({
            [item]: updateItem
        })
    }

    handleChangeRange = (item) => {
        if (item.type) {
            if (item.type === 'enhance') {
                const updatedEnhance = this.state.enhance.map(e => e.title === item.title ? {
                    ...e,
                    value: item.value
                } : e);
                this.setState({
                    enhance: updatedEnhance
                })
            } else {
                const updateState = { ...this.state }
                updateState[item.type] = {
                    on: item.on,
                    value: item.value
                }
                this.setState(updateState)
            }
        }
    }

    handleClickCheck = (title) => {
        let enhance = this.state.enhance.map(item => item.title === title ? { ...item, on: !item.on } : item)
        this.setState({
            enhance
        })
    }

    render() {
        const { micVolume, micSensitivity, sideTone, enhance } = this.state
        return (
            <div className="body-widgets flex">
                <div className="widget-col col-left flex">
                    <div className="widget" id="micPhone">
                        <Help/>
                        <MicVolume
                            micVolume={micVolume}
                            handleChangeRange={this.handleChangeRange}
                            handleClickSwitch={this.handleClickSwitch} />
                        <MicSensitivity
                            micSensitivity={micSensitivity}
                            handleChangeRange={this.handleChangeRange}
                            handleClickSwitch={this.handleClickSwitch} />
                    </div>
                </div>
                <div className="widget-col col-right flex">
                    <div className="widget" id="micSidetone">
                        <Help/>
                        <SideTone
                            sideTone={sideTone}
                            handleChangeRange={this.handleChangeRange}
                            handleClickSwitch={this.handleClickSwitch} />
                    </div>
                    <Enhancements
                        enhance={enhance}
                        handleClickCheck={this.handleClickCheck}
                        handleChangeRange={this.handleChangeRange} />
                </div >
            </div >
        );
    }
}

export default Body;