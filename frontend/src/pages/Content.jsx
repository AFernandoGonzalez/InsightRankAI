import React from 'react';
import { ContentEditor } from '../components/seo/ContentEditor';

export const Content = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>

            {/* Content Editor Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Create and Optimize Content</h2>
                <p className="text-gray-500 mt-2">Use the editor below to create new content or optimize existing articles.</p>
                <ContentEditor />
            </div>

            {/* Content List Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Your Content</h2>
                <p className="text-gray-500 mt-2">Manage your existing content. Click on any item to edit or optimize it further.</p>
                <div className="mt-4 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">How to Improve SEO in 2024</h3>
                        <p className="text-gray-600">Published on January 10, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">Edit</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">The Importance of Backlinks</h3>
                        <p className="text-gray-600">Published on February 20, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">Edit</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Keyword Research Best Practices</h3>
                        <p className="text-gray-600">Published on March 15, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
