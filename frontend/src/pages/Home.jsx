import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-white py-20 shadow-md">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to InsightRank AI</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        The ultimate platform to enhance your website's SEO performance and grow your online presence.
                    </p>
                    <Link to="/register" className="mt-8 inline-block bg-indigo-600 text-white px-8 py-3 rounded-full shadow hover:bg-indigo-700 transition">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Features</h2>
                    <p className="mt-4 text-gray-600">
                        Explore the powerful features of InsightRank AI.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-700">SEO Profile Setup</h3>
                            <p className="mt-2 text-gray-600">
                                Start by setting up your SEO profile with our easy-to-use onboarding process.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-700">Technical SEO</h3>
                            <p className="mt-2 text-gray-600">
                                Perform comprehensive technical SEO audits to enhance your website’s foundation.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-700">Content Management</h3>
                            <p className="mt-2 text-gray-600">
                                Create and optimize high-quality content to boost your search engine rankings.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-700">Competitor Analysis</h3>
                            <p className="mt-2 text-gray-600">
                                Analyze your competitors’ strategies and discover new opportunities for growth.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-700">Backlink Management</h3>
                            <p className="mt-2 text-gray-600">
                                Manage and track backlinks to improve your website’s authority and SEO performance.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-700">Reports and Analytics</h3>
                            <p className="mt-2 text-gray-600">
                                View detailed reports and analytics to measure the success of your SEO efforts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-indigo-600 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Ready to Boost Your SEO?</h2>
                    <p className="mt-4 text-lg">
                        Join InsightRank AI today and take your website’s SEO to the next level!
                    </p>
                    <Link to="/register" className="mt-8 inline-block bg-white text-indigo-600 px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </div>
    );
};
