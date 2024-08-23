import React from 'react';
import { AnalyticsDashboard } from '../components/analytics/AnalyticsDashboard';
import { Heatmaps } from '../components/analytics/Heatmaps';
import { UserExperience } from '../components/analytics/UserExperience';

export const Analytics = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Analytics and Monitoring</h1>
            <p className="text-gray-600">
                Track and analyze your website's performance, user behavior, and SEO effectiveness.
            </p>
            <AnalyticsDashboard />
            <Heatmaps />
            <UserExperience />
        </div>
    );
};
