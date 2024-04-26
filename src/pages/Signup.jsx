import React, { useState } from 'react';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');

    /*const handleLogin = () => {
        clevertap.onUserLogin.push({
        "Site": {
        "Name": name,
        "Email": email,
        "Phone": phone,
        "DOB": new Date(dob)
            }
        });
    }

    const handleProfilePush = () => {
        clevertap.profile.push({
        "Site": {
        "Name": name,
        "Email": email,
        "Phone": phone,
        "DOB": new Date(dob)
            }
        });
    }

    const handlePushNotification = () => {
    clevertap.notifications.push({
        "titleText": 'Would you like to receive Push Notifications?',
        "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText": 'Sign me up!',
        "rejectButtonText": 'No thanks',
        "askAgainTimeInSeconds": 5,
        "okButtonColor": '#f28046'
        });
    }

    const handleEventPush = () => {
        clevertap.event.push({
            "eventName": "FormSubmitted",
            "eventProperties": {
        "name": name,
        "email": email,
        "phone": phone,
        "dob": new Date(dob),
        "age": 25,
        "score": 85.6
            }
        });
    }*/

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email Address
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                Phone Number
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
                Date of Birth
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            />
        </div>
        <div className="flex flex-col justify-between">
            <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            /*onClick={handleLogin}*/
            >
                Login
            </button>
            <button
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            /*onClick={handleProfilePush}*/
            >
                Profile Push
            </button>
            <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            /*onClick={handlePushNotification}*/
            >
                Ask For Push
            </button>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            /*onClick={handleEventPush}*/
            >
                Raise Event
            </button>
        </div>
        </div>
    </div>
);
}

export default SignupForm;