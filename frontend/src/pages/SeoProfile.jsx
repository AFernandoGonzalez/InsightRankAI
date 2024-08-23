import React from 'react';
import { OnboardingForm } from '../components/seo/OnboardingForm';
import { KeywordResearch } from '../components/seo/KeywordResearch';

export const SeoProfile = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">SEO Profile Setup</h1>

            {/* Onboarding Form for New Users */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Setup Your SEO Profile</h2>
                <p className="text-gray-500 mt-2">Fill in the details below to get started with your SEO optimization journey.</p>
                <OnboardingForm />
            </div>

            {/* Keyword Management Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">Manage Keywords</h2>
                <p className="text-gray-500 mt-2">Identify and manage the keywords you want to target.</p>
                <KeywordResearch />
            </div>
        </div>
    );
};
