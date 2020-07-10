import React from 'react'

const ProfileActions = (props) => {
    const { isShowAction,
        handleAddProfile,
        handleRenameProfile,
        handleShowDeleteAlert,
        handleDuplicateProfile } = props
    const actionClasses = ['profile-act']
    if (isShowAction) actionClasses.push('show')
    return (
        <div className={actionClasses.join(' ')} id="profileMenu">
            <div className="act action" onClick={() => handleAddProfile({ name: 'New Profile', selected: true })}>add</div>
            <div className="act action">import</div>
            <div className="act divider"></div>
            <div className="act action" onClick={() => handleRenameProfile()}>rename</div>
            <div className="act action" onClick={() => handleDuplicateProfile()}>duplicate</div>
            <div className="act action">export</div>
            <div className="act divider"></div>
            <div className="act action" id="deleteAction" onClick={() => handleShowDeleteAlert()}>delete</div>
        </div>
    )
}

export default ProfileActions