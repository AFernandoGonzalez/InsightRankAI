import React from 'react';
import { ContentEditor } from '../components/seo/ContentEditor';
import { ContentStrategy } from '../components/content/ContentStrategy';

export const ContentManagement = () => {
    const contentData = {
        articlesCount: 35,
        topKeywords: ["SEO", "digital marketing", "content strategy"],
        strategyNotes: "Focus on creating more content around long-tail keywords."
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
            <p className="text-gray-600">
                Manage your website’s content and develop effective content strategies to enhance SEO.
            </p>

            {/* Content Overview Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Content Overview</h2>
                <p className="text-gray-500">Total Articles: {contentData.articlesCount}</p>
                <p className="text-gray-500">Top Keywords: {contentData.topKeywords.join(", ")}</p>
            </div>

            {/* Content Creation and Management Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Content Editor</h2>
                <ContentEditor />
            </div>

            {/* Content Strategy Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Content Strategy</h2>
                <p className="text-gray-500">{contentData.strategyNotes}</p>
                <ContentStrategy />
            </div>
        </div>
    );
};
