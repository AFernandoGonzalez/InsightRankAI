import React from 'react';

export const TaskScheduler = () => {
    return (
        <div className="mt-4">
            <label className="block text-gray-700 font-semibold">Task Name</label>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter the task name"
            />

            <label className="block text-gray-700 font-semibold mt-4">Frequency</label>
            <select className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
            </select>

            <label className="block text-gray-700 font-semibold mt-4">Time</label>
            <input
                type="time"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />

            <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Schedule Task
            </button>
        </div>
    );
};
