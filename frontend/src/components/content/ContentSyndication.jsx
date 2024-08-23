import React from 'react';

export const ContentSyndication = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Content Syndication</h2>
            <p className="text-gray-500">Distribute your content across various platforms to reach a wider audience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Social Media Sharing</h3>
                    <p className="text-gray-600">Share content on social media platforms automatically.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Content Hubs</h3>
                    <p className="text-gray-600">Syndicate content to platforms like Medium or LinkedIn.</p>
                </div>
            </div>
        </div>
    );
};
