import React from 'react';

export const LocalSeoManager = () => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Google My Business Profile</h3>
            <p className="text-gray-500">Ensure your Google My Business profile is up-to-date with accurate information.</p>

            <label className="block text-gray-700 font-semibold mt-4">Business Name</label>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your business name"
            />

            <label className="block text-gray-700 font-semibold mt-4">Business Address</label>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your business address"
            />

            <label className="block text-gray-700 font-semibold mt-4">Business Hours</label>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your business hours"
            />

            <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Save Profile
            </button>
        </div>
    );
};
