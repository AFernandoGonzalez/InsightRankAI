import React from 'react';
import { OnboardingForm } from '../components/seo/OnboardingForm';
import { KeywordResearch } from '../components/seo/KeywordResearch';

export const SeoProfile = () => {
    const seoData = {
        overallScore: 85,
        generalRecommendation: "Overall, your site is performing well, but there are some areas to improve.",
        onPageScore: 80,
        onPageRecommendation: "Optimize meta tags and headers for better keyword targeting.",
        performanceScore: 90,
        performanceRecommendation: "Improve image loading speed and leverage browser caching."
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">SEO Profile Setup</h1>

            {/* SEO Overview Section */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700">SEO Overview</h2>
                <p className="text-gray-500 mt-2">Overall Score: {seoData.overallScore}</p>
                <p className="text-gray-500">General Recommendation: {seoData.generalRecommendation}</p>
            </div>

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
