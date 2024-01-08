import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileIcon = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faUser} className="text-lg" />
            {/* You can add more elements like username, dropdowns, etc. here */}
        </div>
    );
};

export default ProfileIcon;