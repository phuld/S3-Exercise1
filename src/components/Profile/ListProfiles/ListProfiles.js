
import React, { Component } from 'react'
import './ListProfiles.scss'
import ListProfilesItem from './ListProfilesItem/ListProfilesItem';
class ListProfiles extends Component {

    render() {
        const { isShow, selected, profiles } = this.props;
        let assignClasses = ['s3-options', 'flex']
        if (isShow) {
            assignClasses.push('expand')
        }
        const displayLists = profiles.map((item, index) => (
            <ListProfilesItem
                key={index} 
                profile={item} 
                selected={item.name === selected.name? true: false}
                handleClickItem={this.props.handleClickItem}
                />
        ))
        return (
            <div id="profileDropOpt" className={assignClasses.join(' ')}>
                {displayLists}
            </div>
        );
    }
}

export default ListProfiles;