import React from 'react';
import { CompetitorAnalysis } from '../components/seo/CompetitorAnalysis';
import { BacklinkManager } from '../components/seo/BacklinkManager';

export const ExternalAnalysis = () => {
    const externalData = {
        competitorsAnalyzed: 10,
        totalBacklinks: 150,
        backlinkQuality: "High"
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">External Analysis</h1>
            <p className="text-gray-600">
                Analyze competitor strategies and manage backlinks to enhance your website’s SEO performance.
            </p>

            {/* Competitor Analysis Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Competitor Analysis</h2>
                <p className="text-gray-500">Competitors Analyzed: {externalData.competitorsAnalyzed}</p>
                <CompetitorAnalysis />
            </div>

            {/* Backlink Management Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Backlink Management</h2>
                <p className="text-gray-500">Total Backlinks: {externalData.totalBacklinks}</p>
                <p className="text-gray-500">Backlink Quality: {externalData.backlinkQuality}</p>
                <BacklinkManager />
            </div>
        </div>
    );
};
