import React from 'react';
import { BacklinkManager } from '../components/seo/BacklinkManager';

export const Backlinks = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Backlink Management</h1>

            {/* Backlink Manager Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Manage Your Backlinks</h2>
                <p className="text-gray-500 mt-2">Track your backlinks, view their status, and add new ones to improve your website's authority.</p>
                <BacklinkManager />
            </div>

            {/* Backlink Summary Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Backlink Summary</h2>
                <p className="text-gray-500 mt-2">Overview of your current backlink profile, including total backlinks and referring domains.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Total Backlinks</h3>
                        <p className="text-2xl font-bold text-green-500">3,542</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Top Referring Domains</h3>
                        <p className="text-lg text-gray-600">exampledomain.com, anotherdomain.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
