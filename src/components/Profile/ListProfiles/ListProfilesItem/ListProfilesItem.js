import React from 'react'
import './ListProfilesItem.scss'

const ListProfilesItem = (props) => {
    const { profile, selected } = props;
    let classes = ["option"];
    if (selected) classes.push("selected")
    return (
        <div
            className={classes.join(' ')}
            onClick={() => props.handleClickItem(profile)}>{profile.name}</div>
    )

}

export default ListProfilesItem