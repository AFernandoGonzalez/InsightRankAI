import React from 'react';
import { ReportViewer } from '../components/seo/ReportViewer';

export const Reports = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>

            {/* Reports Overview Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">SEO Performance Reports</h2>
                <p className="text-gray-500 mt-2">View detailed reports of your SEO performance over time. Analyze trends, export data, and make informed decisions.</p>
                <ReportViewer />
            </div>

            {/* Recent Reports Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Recent Reports</h2>
                <p className="text-gray-500 mt-2">Access your most recent reports and continue your analysis.</p>
                <div className="mt-4 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">January 2024 SEO Report</h3>
                        <p className="text-gray-600">Generated on February 1, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Report</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">December 2023 SEO Report</h3>
                        <p className="text-gray-600">Generated on January 1, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Report</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">November 2023 SEO Report</h3>
                        <p className="text-gray-600">Generated on December 1, 2023</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
