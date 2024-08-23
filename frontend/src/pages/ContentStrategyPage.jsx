import React from 'react';
import { ContentStrategy } from '../components/content/ContentStrategy';

export const ContentStrategyPage = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Content Strategy Management</h1>
            <p className="text-gray-600">
                Develop and manage a content strategy that aligns with your SEO goals and engages your target audience.
            </p>
            <ContentStrategy />
        </div>
    );
};
