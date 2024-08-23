import React from 'react';

export const OnboardingForm = () => {
    return (
        <form className="space-y-4 mt-4">
            <div>
                <label className="block text-gray-700 font-semibold">Website URL</label>
                <input
                    type="url"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="https://yourwebsite.com"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold">Primary Keywords</label>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your primary keywords"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold">Competitors</label>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your competitors' websites"
                />
            </div>
            <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Save Profile
            </button>
        </form>
    );
};
