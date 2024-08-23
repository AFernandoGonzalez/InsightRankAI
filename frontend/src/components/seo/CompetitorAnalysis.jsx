import React from 'react';

export const CompetitorAnalysis = () => {
    return (
        <div className="mt-4 space-y-6">
            {/* Competitor Overview */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">Competitor Overview</h3>
                <p className="text-gray-500 mt-2">Detailed analysis of your selected competitor's SEO performance.</p>

                {/* Top Keywords */}
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-700">Top Keywords</h4>
                    <ul className="mt-2 space-y-2">
                        <li className="flex justify-between text-gray-600">
                            <span>Keyword 1</span>
                            <span className="text-green-500">Rank: #2</span>
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

                {/* Backlink Profile */}
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-700">Backlink Profile</h4>
                    <p className="text-gray-500 mt-2">Total Backlinks: <span className="text-green-500 font-bold">3,542</span></p>
                    <p className="text-gray-500 mt-1">Top Referring Domains: <span className="text-blue-500 font-bold">exampledomain.com, anotherdomain.com</span></p>
                </div>

                {/* Content Strategy */}
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-700">Content Strategy</h4>
                    <p className="text-gray-500 mt-2">Recent Blog Posts:</p>
                    <ul className="mt-2 space-y-2">
                        <li className="text-gray-600">"How to Optimize for SEO in 2024"</li>
                        <li className="text-gray-600">"The Ultimate Guide to Backlinking"</li>
                        <li className="text-gray-600">"Top 10 SEO Trends You Can't Ignore"</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
