import React from 'react';
import { TaskScheduler } from '../components/seo/TaskScheduler';

export const Tasks = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Task Automation</h1>

            {/* Task Scheduler Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Automate Your SEO Tasks</h2>
                <p className="text-gray-500 mt-2">Schedule and manage automated tasks such as site audits, content updates, and backlink checks.</p>
                <TaskScheduler />
            </div>

            {/* Scheduled Tasks Overview */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Scheduled Tasks</h2>
                <p className="text-gray-500 mt-2">Overview of your scheduled tasks and their statuses.</p>
                <ul className="mt-4 space-y-4">
                    <li className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Weekly Site Audit</h3>
                        <p className="text-gray-600">Scheduled for every Monday at 9:00 AM</p>
                        <button className="mt-2 text-blue-500 hover:underline">Edit Task</button>
                    </li>
                    <li className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Monthly Content Update</h3>
                        <p className="text-gray-600">Scheduled for the 1st of every month at 10:00 AM</p>
                        <button className="mt-2 text-blue-500 hover:underline">Edit Task</button>
                    </li>
                    <li className="p-4 bg-gray-50 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Daily Backlink Check</h3>
                        <p className="text-gray-600">Scheduled for every day at 8:00 AM</p>
                        <button className="mt-2 text-blue-500 hover:underline">Edit Task</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
