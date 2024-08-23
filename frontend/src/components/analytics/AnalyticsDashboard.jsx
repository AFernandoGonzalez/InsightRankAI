import React from 'react';

export const AnalyticsDashboard = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
            <p className="text-gray-500">Monitor your website’s SEO performance with detailed analytics and insights.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Traffic Overview</h3>
                    <p className="text-gray-600">View the total traffic, organic traffic, and referral traffic to your website.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Keyword Rankings</h3>
                    <p className="text-gray-600">Track the rankings of your target keywords over time.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Backlink Analysis</h3>
                    <p className="text-gray-600">Analyze the quality and quantity of backlinks to your site.</p>
                </div>
            </div>
        </div>
    );
};
