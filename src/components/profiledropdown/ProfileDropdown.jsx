import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';
import {signOut} from "firebase/auth";
import {auth} from '../../firebase'; // Adjust the import path
import ProfileIcon from "../profileicon/ProfileIcon";

const ProfileDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/signin');
        } catch (error) {
            alert(`Error signing out: ${error}`);
        }
    };

    return (
        <div className="relative inline-block text-left">
            <div className="pt-4">
                <button onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center text-sm rounded-full focus:outline-none focus:ring">
                    <ProfileIcon/>
                </button>
            </div>

            {showDropdown && (
                <div
                    className="absolute right-0 mt-2 w-36 text-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <NavLink to="/documents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My
                            Documents</NavLink>
                        <button onClick={handleSignOut}
                                className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign
                            Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
