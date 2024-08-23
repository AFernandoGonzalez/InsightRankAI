import React from 'react';

export const ContentEditor = () => {
    return (
        <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your content title here"
            />

            <label className="block text-gray-700 font-semibold mt-4 mb-2">Content</label>
            <textarea
                className="w-full h-64 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Start writing your content here..."
            ></textarea>

            <label className="block text-gray-700 font-semibold mt-4 mb-2">SEO Meta Description</label>
            <textarea
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write a brief description for SEO purposes"
            ></textarea>

            <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Save Content
            </button>
        </div>
    );
};
