import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './App.scss'
import Profile from '../components/Profile/Profile'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'


export class App extends Component {

    render() {
        return (
            <div className="main-container" ref={this.wrapperRef}>
                <Navbar />
                <div className="body-wrapper scrollable" >
                    <Profile />
                    <Body />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App

