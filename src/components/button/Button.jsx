import React from 'react';
import { useNavigate } from 'react-router-dom';

function PrimaryButton({ text, route }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-purple-900 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
        >
            {text}
        </button>
    );
}

function SecondaryButton({ text, route }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-transparent hover:bg-purple-900 text-purple-900 font-medium hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded"
        >
            {text}
        </button>
    );
}

export { PrimaryButton, SecondaryButton };
