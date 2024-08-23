import React from 'react';
import { OnPageSeo } from '../components/seo/OnPageSeo';

export const OnPageSeoPage = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">On-Page SEO Optimization</h1>
            <p className="text-gray-600">
                Optimize your website's on-page elements, including content, meta tags, and internal linking, to improve search engine rankings.
            </p>
            <OnPageSeo />
        </div>
    );
};
