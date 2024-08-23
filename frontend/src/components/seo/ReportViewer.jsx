import React from 'react';

export const ReportViewer = () => {
    return (
        <div className="mt-4 space-y-6">
            {/* Report Summary */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">SEO Report Summary</h3>
                <p className="text-gray-500 mt-2">A summary of your SEO performance for the selected period.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-gray-800">Organic Traffic</h4>
                        <p className="text-2xl font-bold text-green-500">25,462</p>
                        <p className="text-sm text-gray-500">Increase of 8% from last month</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-gray-800">Keyword Rankings</h4>
                        <p className="text-2xl font-bold text-blue-500">Top 5 for 12 keywords</p>
                        <p className="text-sm text-gray-500">Improvement in 3 keywords</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold text-gray-800">Backlinks Acquired</h4>
                        <p className="text-2xl font-bold text-purple-500">45 New Backlinks</p>
                        <p className="text-sm text-gray-500">12% increase in referring domains</p>
                    </div>
                </div>
            </div>

            {/* Detailed Metrics */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">Detailed SEO Metrics</h3>
                <p className="text-gray-500 mt-2">Explore detailed metrics of your SEO performance, including organic traffic, keyword rankings, and backlink growth.</p>
                
                {/* Example Graph or Chart - Placeholder */}
                <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow">
                    <h4 className="text-lg font-semibold text-gray-800">Traffic Over Time</h4>
                    <div className="mt-4">
                        {/* Placeholder for a chart/graph */}
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                            [Graph Placeholder]
                        </div>
                    </div>
                </div>
            </div>

            {/* Export Report */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700">Export Report</h3>
                <p className="text-gray-500 mt-2">Download your SEO report in various formats for offline analysis or sharing.</p>
                <div className="mt-4">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Export as PDF
                    </button>
                    <button className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Export as CSV
                    </button>
                </div>
            </div>
        </div>
    );
};
