import React from 'react';
import { CompetitorAnalysis } from '../components/seo/CompetitorAnalysis';

export const Competitors = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Competitor Analysis</h1>

            {/* Competitor Analysis Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Analyze Your Competitors</h2>
                <p className="text-gray-500 mt-2">Get insights into your competitors' SEO strategies, including their top keywords, backlink profiles, and content strategies.</p>
                <CompetitorAnalysis />
            </div>

            {/* Competitor List Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Your Tracked Competitors</h2>
                <p className="text-gray-500 mt-2">Manage the list of competitors you're tracking. Click on any competitor to view detailed analysis.</p>
                <div className="mt-4 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Competitor 1: example.com</h3>
                        <p className="text-gray-600">Last Analyzed: January 15, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Analysis</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Competitor 2: anotherexample.com</h3>
                        <p className="text-gray-600">Last Analyzed: February 10, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Analysis</button>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Competitor 3: siteexample.com</h3>
                        <p className="text-gray-600">Last Analyzed: March 5, 2024</p>
                        <button className="mt-2 text-blue-500 hover:underline">View Analysis</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
