import React from 'react';

export const OnPageSeo = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">On-Page SEO Optimization</h2>
            <p className="text-gray-500">Optimize your website content and structure to improve search engine rankings.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Keyword Research</h3>
                    <p className="text-gray-600">Identify and analyze relevant keywords for your content.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Optimized Content</h3>
                    <p className="text-gray-600">Create and optimize high-quality content with relevant keywords.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Meta Tags</h3>
                    <p className="text-gray-600">Optimize meta titles, descriptions, and alt tags for images.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Internal Linking</h3>
                    <p className="text-gray-600">Improve internal linking structure to enhance site navigation.</p>
                </div>
            </div>
        </div>
    );
};
