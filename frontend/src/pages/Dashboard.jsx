import React from 'react';
import { SeoDashboard } from '../components/seo/SeoDashboard';
import { Sidebar } from '../components/layout/Sidebar';

export const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* <Sidebar /> */}
            <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
                
                {/* High-Level Summary Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700">Overall SEO Score</h2>
                        <p className="text-4xl font-bold text-green-500 mt-2">85%</p>
                        <p className="text-sm text-gray-500 mt-1">Based on your latest audit.</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700">Top Keywords</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between text-gray-600">
                                <span>Keyword 1</span>
                                <span>#3</span>
                            </li>
                            <li className="flex justify-between text-gray-600">
                                <span>Keyword 2</span>
                                <span>#7</span>
                            </li>
                            <li className="flex justify-between text-gray-600">
                                <span>Keyword 3</span>
                                <span>#1</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-700">Backlinks</h2>
                        <p className="text-2xl font-bold text-green-500 mt-2">1,245</p>
                        <p className="text-sm text-gray-500 mt-1">Total backlinks acquired.</p>
                    </div>
                </div>
                
                {/* Detailed SEO Dashboard Section */}
                <SeoDashboard />
            </div>
        </div>
    );
};
