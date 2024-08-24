import React from 'react';

export const OnPageSeo = ({ seoData }) => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">On-Page SEO Optimization</h2>
            <p className="text-gray-500">Optimize your website content and structure to improve search engine rankings.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Keyword Research</h3>
                    {seoData.keywordConsistency.map((item, index) => (
                        <p key={index} className="text-gray-600">
                            {item.keyword}: {item.frequency} occurrences
                        </p>
                    ))}
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Optimized Content</h3>
                    <p className="text-gray-600">Word Count: {seoData.contentAmount.wordCount}</p>
                    <p className="text-gray-600">Recommendation: {seoData.contentAmount.recommendation}</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Meta Tags</h3>
                    <p className="text-gray-600">Meta Description: {seoData.metaDescription.exists ? "Present" : "Missing"}</p>
                    <p className="text-gray-600">Recommendation: {seoData.metaDescription.recommendation}</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Internal Linking</h3>
                    <p className="text-gray-600">Improve internal linking structure to enhance site navigation.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Header Tags</h3>
                    <p className="text-gray-600">H1 Tag: {seoData.headerTags.h1 ? "Present" : "Missing"}</p>
                    <p className="text-gray-600">H2 Tags: {seoData.headerTags.h2}</p>
                    <p className="text-gray-600">H3 Tags: {seoData.headerTags.h3}</p>
                    {/* Add similar lines for H4, H5, H6 if needed */}
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Image Alt Attributes</h3>
                    <p className="text-gray-600">
                        {seoData.imageAltAttributes.missingAltAttributes
                            ? "Some images are missing alt attributes."
                            : "All images have alt attributes."}
                    </p>
                    <p className="text-gray-600">Recommendation: {seoData.imageAltAttributes.recommendation}</p>
                </div>
            </div>
        </div>
    );
};
