import React from 'react';
import { TechnicalSeo } from '../components/seo/TechnicalSeo';

export const TechnicalSeoPage = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Technical SEO Analysis</h1>
            <p className="text-gray-600">
                Analyze and optimize your website's technical aspects to ensure optimal performance and search engine compatibility.
            </p>
            <TechnicalSeo />
        </div>
    );
};
