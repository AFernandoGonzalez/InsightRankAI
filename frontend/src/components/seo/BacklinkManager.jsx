import React from 'react';

export const BacklinkManager = () => {
    return (
        <div className="mt-4 space-y-6">
            {/* Backlink List */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">Your Backlinks</h3>
                <ul className="mt-4 space-y-4">
                    <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow">
                        <div>
                            <p className="text-gray-800 font-semibold">example.com</p>
                            <p className="text-gray-600">Status: <span className="text-green-500">Active</span></p>
                        </div>
                        <button className="text-blue-500 hover:underline">View Details</button>
                    </li>
                    <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow">
                        <div>
                            <p className="text-gray-800 font-semibold">anotherexample.com</p>
                            <p className="text-gray-600">Status: <span className="text-yellow-500">Pending</span></p>
                        </div>
                        <button className="text-blue-500 hover:underline">View Details</button>
                    </li>
                    <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow">
                        <div>
                            <p className="text-gray-800 font-semibold">siteexample.com</p>
                            <p className="text-gray-600">Status: <span className="text-red-500">Broken</span></p>
                        </div>
                        <button className="text-blue-500 hover:underline">View Details</button>
                    </li>
                </ul>
            </div>

            {/* Add New Backlink */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">Add New Backlink</h3>
                <form className="mt-4 space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold">Website URL</label>
                        <input
                            type="url"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="https://example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Anchor Text</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter anchor text"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Backlink
                    </button>
                </form>
            </div>
        </div>
    );
};
