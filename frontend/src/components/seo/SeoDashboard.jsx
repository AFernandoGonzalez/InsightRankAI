import React from 'react';

export const SeoDashboard = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Detailed SEO Metrics</h2>
            
            {/* Traffic Insights */}
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700">Traffic Insights</h3>
                <div className="flex items-center mt-4">
                    <div className="w-1/2">
                        <p className="text-sm text-gray-500">Organic Traffic</p>
                        <p className="text-3xl font-bold text-purple-500">24,562</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-sm text-gray-500">Referral Traffic</p>
                        <p className="text-3xl font-bold text-indigo-500">8,123</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-500">Total Traffic</p>
                    <p className="text-3xl font-bold text-green-500">32,685</p>
                </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700">Recent Activities</h3>
                <ul className="mt-4 space-y-2">
                    <li className="text-gray-600">
                        <span className="font-semibold text-blue-500">Keyword Analysis:</span> Analyzed 50 new keywords
                    </li>
                    <li className="text-gray-600">
                        <span className="font-semibold text-blue-500">Backlink Added:</span> New backlink from example.com
                    </li>
                    <li className="text-gray-600">
                        <span className="font-semibold text-blue-500">Content Updated:</span> Optimized blog post on SEO trends
                    </li>
                </ul>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700">Upcoming Tasks</h3>
                <ul className="mt-4 space-y-2">
                    <li className="text-gray-600">
                        <span className="font-semibold text-red-500">Audit:</span> Complete site audit scheduled for tomorrow
                    </li>
                    <li className="text-gray-600">
                        <span className="font-semibold text-red-500">Content Creation:</span> Write a new blog post on link-building strategies
                    </li>
                    <li className="text-gray-600">
                        <span className="font-semibold text-red-500">Keyword Research:</span> Identify new long-tail keywords
                    </li>
                </ul>
            </div>
        </div>
    );
};
