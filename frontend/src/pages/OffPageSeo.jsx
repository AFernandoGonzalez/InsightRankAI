import React from 'react';
import { BacklinkManager } from '../components/seo/BacklinkManager';
import { ContentSyndication } from '../components/content/ContentSyndication';

export const OffPageSeo = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Off-Page SEO Management</h1>
            <p className="text-gray-600">
                Enhance your website’s authority through effective backlink building and content syndication strategies.
            </p>
            <BacklinkManager />
            <ContentSyndication />
        </div>
    );
};
