import React from 'react';
import { LocalSeoManager } from '../components/seo/LocalSeoManager';

export const LocalSeo = () => {
    const localSeoData = {
        googleMyBusinessStatus: "Optimized",
        totalCitations: 45
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Local SEO Management</h1>

            {/* Local SEO Manager Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Optimize Your Local SEO</h2>
                <p className="text-gray-500 mt-2">Manage your local SEO presence, including Google My Business and local citations.</p>
                <LocalSeoManager />
            </div>

            {/* Local SEO Overview */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Local SEO Overview</h2>
                <p className="text-gray-500 mt-2">Overview of your local SEO efforts and their impact on local search visibility.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Google My Business</h3>
                        <p className="text-gray-600">Status: <span className="text-green-500">{localSeoData.googleMyBusinessStatus}</span></p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Local Citations</h3>
                        <p className="text-gray-600">Total Citations: <span className="text-blue-500">{localSeoData.totalCitations}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
