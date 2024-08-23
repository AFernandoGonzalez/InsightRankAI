import React from 'react';
import { TechnicalSeo } from '../components/seo/TechnicalSeo';
import { OnPageSeo } from '../components/seo/OnPageSeo';

export const SeoOptimization = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">SEO Optimization</h1>
            <p className="text-gray-600">
                Improve your website’s SEO through technical checks and on-page optimizations.
            </p>

            {/* Technical SEO Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">Technical SEO</h2>
                <TechnicalSeo />
            </div>

            {/* On-Page SEO Section */}
            <div className="bg-white p-6 shadow rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">On-Page SEO</h2>
                <OnPageSeo />
            </div>
        </div>
    );
};
