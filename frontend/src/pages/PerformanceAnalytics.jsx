import React from 'react';
import { ReportViewer } from '../components/seo/ReportViewer';
import { AnalyticsDashboard } from '../components/analytics/AnalyticsDashboard';
import { Heatmaps } from '../components/analytics/Heatmaps';
import { UserExperience } from '../components/analytics/UserExperience';

export const PerformanceAnalytics = () => {
    const analyticsData = {
        reportGenerated: "2024-08-20",
        pageViews: 15000,
        bounceRate: "45%"
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Performance Analytics</h1>
            <p className="text-gray-600">
                View detailed reports and analytics to measure your SEO performance and optimize your strategies.
            </p>

            {/* Reports Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">SEO Reports</h2>
                <p className="text-gray-500">Last Report Generated: {analyticsData.reportGenerated}</p>
                <ReportViewer />
            </div>

            {/* Analytics Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Analytics Dashboard</h2>
                <p className="text-gray-500">Page Views: {analyticsData.pageViews}</p>
                <p className="text-gray-500">Bounce Rate: {analyticsData.bounceRate}</p>
                <AnalyticsDashboard />
            </div>

            {/* Heatmaps Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Heatmap Analysis</h2>
                <Heatmaps />
            </div>

            {/* User Experience Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">User Experience Insights</h2>
                <UserExperience />
            </div>
        </div>
    );
};
