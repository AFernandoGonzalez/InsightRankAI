import React from 'react';

export const ContentStrategy = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Content Strategy</h2>
            <p className="text-gray-500">Develop and execute a content strategy that drives traffic and engagement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Blogging</h3>
                    <p className="text-gray-600">Regularly publish valuable blog posts that address audience needs.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Evergreen Content</h3>
                    <p className="text-gray-600">Create content that remains relevant over time.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Content Updates</h3>
                    <p className="text-gray-600">Periodically update old content to keep it fresh.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">User-Generated Content</h3>
                    <p className="text-gray-600">Encourage reviews and testimonials to generate engagement.</p>
                </div>
            </div>
        </div>
    );
};
