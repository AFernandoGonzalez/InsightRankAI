import React from 'react';

export const KeywordResearch = () => {
    return (
        <div className="space-y-4 mt-4">
            {/* Keyword List */}
            <div>
                <h3 className="text-xl font-semibold text-gray-700">Your Keywords</h3>
                <ul className="space-y-2 mt-2">
                    <li className="flex justify-between text-gray-600">
                        <span>Keyword 1</span>
                        <span className="text-green-500">Rank: #3</span>
                    </li>
                    <li className="flex justify-between text-gray-600">
                        <span>Keyword 2</span>
                        <span className="text-green-500">Rank: #5</span>
                    </li>
                    <li className="flex justify-between text-gray-600">
                        <span>Keyword 3</span>
                        <span className="text-green-500">Rank: #8</span>
                    </li>
                </ul>
            </div>

            {/* Add New Keyword */}
            <div>
                <label className="block text-gray-700 font-semibold">Add New Keyword</label>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter a new keyword"
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3"
                >
                    Add Keyword
                </button>
            </div>
        </div>
    );
};
