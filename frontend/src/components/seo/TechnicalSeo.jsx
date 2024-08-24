import React from 'react';

export const TechnicalSeo = ({ seoData }) => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Technical SEO Analysis</h2>
            <p className="text-gray-500">Analyze your website’s technical SEO aspects like website structure, mobile optimization, page speed, and security.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Website Structure</h3>
                    <p className="text-gray-600">Canonical Tag: {seoData.canonicalTag ? "Present" : "Missing"}</p>
                    <p className="text-gray-600">Noindex Tag: {seoData.noindexTag ? "Present" : "Missing"}</p>
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
                    <p className="text-gray-600">SSL Enabled: {seoData.sslEnabled ? "Yes" : "No"}</p>
                    <p className="text-gray-600">HTTPS Redirect: {seoData.httpsRedirect ? "Yes" : "No"}</p>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">XML Sitemap & Robots.txt</h3>
                    <p className="text-gray-600">XML Sitemap: {seoData.xmlSitemap ? "Present" : "Missing"}</p>
                    <p className="text-gray-600">Robots.txt: {seoData.robotsTxt ? "Present" : "Missing"}</p>
                    <p className="text-gray-600">Blocked by Robots.txt: {seoData.blockedByRobotsTxt ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    );
};
