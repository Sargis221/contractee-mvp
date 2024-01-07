import React, {useState} from 'react';
import {auth} from "../../firebase";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import {PrimaryButton} from "../../components/button/Button";


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/documents');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 py-5">
            <form onSubmit={handleSubmit} className="p-6 max-w-sm w-full bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="**********"
                    />
                </div>
                <PrimaryButton text="Submit" type="submit"></PrimaryButton>
            </form>
        </div>
    );
}

export default SignIn;
