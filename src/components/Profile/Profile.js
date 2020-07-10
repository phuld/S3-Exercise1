import React, { Component } from 'react';
import './Profile.scss';
import ListProfiles from './ListProfiles/ListProfiles';
import ProfileActions from './ProfileActions/ProfileActions';
import AlertDelete from '../UI/AlertDelete/AlertDelete';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [
                { name: 'Default Profile', selected: false },
                { name: 'Profile 2', selected: false },
                { name: 'profile 3', selected: false },
                { name: 'Profile 4', selected: false },
                { name: 'Profile 5', selected: true },
                { name: 'Profile 6', selected: false },
                { name: 'Profile 7', selected: false },
                { name: 'Profile 8', selected: false },
            ],
            isShow: false,
            isShowAction: false,
            isRenameProfile: false,
            isShowDeleteAlert: false,
        }
        this.wrapperRef = React.createRef()
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside)
    }

    handleClickOutside = (e) => {
        const { target } = e
        if (!this.wrapperRef.current.contains(target)) {
            this.setState({
                isShow: false,
                isShowAction: false,
                isRenameProfile: false,
                isShowDeleteAlert: false,
            })
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                isShow: !prevState.isShow
            }
        })
    }

    handleClickItem = (update) => {
        const { profiles } = this.state;
        const updateProfiles = profiles.map(item => item.name === update.name ?
            { name: update.name, selected: true } :
            { name: item.name, selected: false })
        this.setState({
            profiles: updateProfiles
        })
    }

    handleAction = () => {
        if (this.state.isShowAction) {
            this.setState({
                isShowAction: false
            })
        } else {
            this.setState({
                isShow: false,
                isShowAction: true,
                isRenameProfile: false
            })
        }

    }

    handleAddProfile = (profile) => {
        const profiles = this.state.profiles.map(e => {
            const updateE = {
                name: e.name,
                selected: false
            }
            return updateE
        })
        profiles.push(profile)
        this.setState({
            profiles
        })
    }

    handleRenameProfile = (profile) => {
        this.setState({
            isRenameProfile: true
        })
    }

    handleChangeName = (e) => {
        const updateItems = this.state.profiles.map(el => {
            if (el.selected === true) {
                return {
                    name: e.target.value,
                    selected: true
                }
            } else return el
        })
        this.setState({
            profiles: updateItems
        })
    }

    handleDeleteProfile = () => {
        const profiles = this.state.profiles;
        const selectedProfile = profiles.filter(e => e.selected === true)
        const index = profiles.indexOf(selectedProfile[0])
        const updateProfiles = profiles.filter(e => e.selected === false)
        index === 0 ? updateProfiles[0].selected = true : updateProfiles[index - 1].selected = true
        this.setState({
            profiles: updateProfiles,
            isShowDeleteAlert: false
        })
    }

    handleShowDeleteAlert = () => {
        this.setState({
            isShowDeleteAlert: true
        })
    }

    handleDuplicateProfile = () => {
        const selectedProfile = this.state.profiles.filter(item => item.selected === true)
        const first = selectedProfile[0].name.indexOf('(');
        let name = selectedProfile[0].name
        if(first !== -1) {
            name = selectedProfile[0].name.substring(0, first)
        }
        const numberProfiles = this.state.profiles.filter(item => item.name.indexOf(name) !== -1 ? item : null)
        const updateProfiles = this.state.profiles.map(e => ({
            name: e.name,
            selected: false
        }))
        updateProfiles.push({
            name: `${name}(${numberProfiles.length})`,
            selected: true
        })
        this.setState({
            profiles: updateProfiles
        })
    }

    render() {
        const { isShow, profiles, isShowAction, isRenameProfile, isShowDeleteAlert } = this.state;
        const selectedItem = profiles.filter(item => item.selected)

        const classes = ['s3-dropdown']
        if (isShow) classes.push('expand')

        const actionClasses = ['dots3', 'hover-border']
        if (isShowAction) actionClasses.push('active')

        const renameClasses = []
        if (isRenameProfile) renameClasses.push('show')

        return (
            <div className="profile-bar flex" ref={this.wrapperRef}>
                <div className="loader" tooltip="Syncing Profiles"></div>
                <div>profile</div>

                <input
                    type="text"
                    name="profile"
                    id="profileEdit"
                    maxLength="25"
                    value={selectedItem[0].name}
                    className={renameClasses.join(' ')}
                    onChange={this.handleChangeName} />

                <div className="dropdown-area" onClick={this.handleClick}>
                    <div id="profileDrop" className={classes.join(' ')}>
                        <div className="selected">{selectedItem[0].name}</div>
                        <div className="icon expand"></div>
                    </div>
                    <ListProfiles
                        isShow={isShow}
                        profiles={profiles}
                        selected={selectedItem[0]}
                        handleClickItem={this.handleClickItem} />
                </div>

                <div className={actionClasses.join(' ')} id="profileMenuToggle" onClick={this.handleAction}>
                    <ProfileActions
                        isShowAction={isShowAction}
                        handleAddProfile={this.handleAddProfile}
                        handleRenameProfile={() => this.handleRenameProfile(selectedItem[0])}
                        handleShowDeleteAlert={this.handleShowDeleteAlert}
                        handleDuplicateProfile={this.handleDuplicateProfile} />
                </div>
                <AlertDelete
                    isShowDeleteAlert={isShowDeleteAlert}
                    handleDeleteProfile={this.handleDeleteProfile} />
                <div className="obm hover-border" tooltip="On-board Profiles"></div>
                <div className="divider"></div>
                <div className="batt batt-30" tooltip="30% Battery"></div>
            </div>
        );
    }
}

export default Profile;