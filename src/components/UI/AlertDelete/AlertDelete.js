import React, { Component } from 'react'

class AlertDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.wrapperRef = React.createRef()
    }

    // componentDidMount() {
    //     document.addEventListener('click', this.handleClickOutside)
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClickOutside)
    // }

    // handleClickOutside = (e) => {
    //     const { target } = e
    //     if (!this.wrapperRef.current.contains(target)) {
    //         // this.props.handleCloseDeleteAlert()
    //         alert('tada')
    //     }
    // }
    render() {
        const { isShowDeleteAlert, handleDeleteProfile } = this.props
        const assignClasses = ['flex', 'alert', 'profile-del']
        if (isShowDeleteAlert) assignClasses.push('show')
        return (
            <div id="deleteAlert" className={assignClasses.join(' ')}  ref={this.wrapperRef}>
                <div className="title">delete profile</div>
                <div className="body-text t-center">
                    You're about to delete this profile. All bindings in this profile will be deleted.
                    </div>
                <div className="thx-btn" id="deleteConfirm" onClick={() => handleDeleteProfile()}>delete</div>
            </div>
        )
    }
}

export default AlertDelete;