import React from 'react';

export const TechnicalSeo = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Technical SEO Analysis</h2>
            <p className="text-gray-500">Analyze your website’s technical SEO aspects like website structure, mobile optimization, page speed, and security.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Website Structure</h3>
                    <p className="text-gray-600">Analyzed headers, URL hierarchy, and internal linking.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Mobile Optimization</h3>
                    <p className="text-gray-600">Checked for mobile usability and responsiveness.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Page Speed</h3>
                    <p className="text-gray-600">Page speed analyzed using tools like Google PageSpeed Insights.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Secure Website (HTTPS)</h3>
                    <p className="text-gray-600">SSL certificate status and HTTPS implementation.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">XML Sitemap & Robots.txt</h3>
                    <p className="text-gray-600">Ensure proper sitemap and robots.txt file configurations.</p>
                </div>
            </div>
        </div>
    );
};
