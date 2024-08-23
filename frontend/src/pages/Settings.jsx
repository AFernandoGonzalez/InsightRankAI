import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';

export const Settings = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* <Sidebar /> */}
            <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">User Settings</h1>

                {/* Account Settings Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Account Settings</h2>
                    <p className="text-gray-500 mt-2">Update your account details and preferences.</p>
                    <form className="mt-4 space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="yourname@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Password</label>
                            <input
                                type="password"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter new password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* Notification Settings Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Notification Settings</h2>
                    <p className="text-gray-500 mt-2">Manage your notification preferences.</p>
                    <form className="mt-4 space-y-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                            <label className="ml-2 block text-gray-700">Receive email notifications</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                            <label className="ml-2 block text-gray-700">Receive SMS notifications</label>
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Preferences
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
