import React, { useState, useEffect } from 'react';

export const SeoOptimization = () => {
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:8000/api'; // Update with your backend URL

  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const response = await fetch(`${apiUrl}/seo/data?url=https://www.fernandocodes.com`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data); // Log the output from the backend
        setSeoData(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeoData();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="seo-optimization p-8 space-y-12">
      <div className="audit-summary bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {/* Audit Results for {seoData?.siteName} */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              {/* Overall Grade: {seoData?.auditSummary?.overallGrade} */}
            </h2>
            <div className="progress-bar">
              {/* Replace this with a visual grade indicator */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// import {useState, useEffect} from 'react';

// export const SeoOptimization = () => {
//   // const seoData = {
//   //   siteName: 'fernandocodes.com',
//   //   auditSummary: {
//   //     overallGrade: 'C',
//   //     onPageSeo: 'B',
//   //     links: 'F',
//   //     usability: 'A-',
//   //     performance: 'A',
//   //     social: 'F',
//   //     reportGenerated: '23 August 10:45PM UTC',
//   //   },
//   //   recommendations: [
//   //     { title: 'Execute a Link Building Strategy', category: 'Links', priority: 'High' },
//   //     { title: 'Include a meta description tag', category: 'On-Page SEO', priority: 'High' },
//   //     // Additional recommendations...
//   //   ],
//   //   onPageSeo: {
//   //     grade: 'B',
//   //     overview: 'Your On-Page SEO could be better. Your page has some level of On-Page SEO optimization but could be improved further. On-Page SEO is important to ensure Search Engines can understand your content appropriately and help it rank for relevant keywords.',
//   //     titleTag: {
//   //       content: 'FernandoCodes',
//   //       length: 13,
//   //       recommendation: 'Title tags should be between 50 and 60 characters.',
//   //     },
//   //     metaDescription: {
//   //       exists: false,
//   //       recommendation: 'Add a meta description to improve search engine understanding.',
//   //     },
//   //     hreflangUsage: false,
//   //     language: {
//   //       declared: 'English',
//   //     },
//   //     headerTags: {
//   //       h1: true,
//   //       h2: 6,
//   //       h3: 3,
//   //       h4: 0,
//   //       h5: 0,
//   //       h6: 0,
//   //     },
//   //     keywordConsistency: {
//   //       overview: "Your page's main keywords are not distributed well across the important HTML tags.",
//   //       individualKeywords: [
//   //         { keyword: 'analytics', title: false, metaDescriptionTag: false, headingsTags: false, pageFrequency: 5 },
//   //         // Add more keyword data...
//   //       ],
//   //       phrases: [
//   //         { phrase: 'live demo', title: false, metaDescriptionTag: false, headingsTags: false, pageFrequency: 3 },
//   //         // Add more phrases data...
//   //       ],
//   //     },
//   //     contentAmount: {
//   //       wordCount: 234,
//   //       recommendation: 'Increase content volume for better ranking.',
//   //     },
//   //     imageAltAttributes: {
//   //       missingAltAttributes: false,
//   //       recommendation: 'Ensure all images have alt attributes.',
//   //     },
//   //     canonicalTag: true,
//   //     noindexTag: false,
//   //     noindexHeader: false,
//   //     sslEnabled: true,
//   //     httpsRedirect: true,
//   //     robotsTxt: true,
//   //     blockedByRobotsTxt: false,
//   //     xmlSitemap: true,
//   //     analyticsTool: 'Google Analytics',
//   //     schemaOrg: false,
//   //   },
//   //   links: {
//   //     summary: 'You have a reasonably weak level of backlink activity to this page.',
//   //     metrics: {
//   //       domainStrength: 0,
//   //       pageStrength: 0,
//   //       totalBacklinks: 0,
//   //       referringDomains: 0,
//   //       nofollowBacklinks: 0,
//   //       dofollowBacklinks: 0,
//   //       eduBacklinks: 0,
//   //       govBacklinks: 0,
//   //       subnets: 0,
//   //       ips: 0,
//   //     },
//   //   },
//   //   usability: {
//   //     grade: 'A-',
//   //     overview: 'Your usability is good. Your page is mostly usable across devices.',
//   //     coreWebVitals: {
//   //       mobileScore: 67,
//   //       desktopScore: 95,
//   //     },
//   //   },
//   //   performance: {
//   //     grade: 'A',
//   //     overview: 'Your performance is good. Your page has performed well in our testing meaning it should be reasonably responsive for your users.',
//   //     speedDetails: {
//   //       firstContentfulPaint: '4.7 s',
//   //       speedIndex: '4.7 s',
//   //       largestContentfulPaint: '5.1 s',
//   //       timeToInteractive: '4.8 s',
//   //       totalBlockingTime: '0 s',
//   //       cumulativeLayoutShift: '0',
//   //     },
//   //     opportunities: [
//   //       { suggestion: 'Avoid multiple page redirects', savings: '1.38 s' },
//   //       { suggestion: 'Eliminate render-blocking resources', savings: '1.05 s' },
//   //       { suggestion: 'Reduce unused JavaScript', savings: '0.75 s' },
//   //     ],
//   //   },
//   //   social: {
//   //     grade: 'F',
//   //     overview: 'Your social needs improvement. You appear to have a weak social presence or level of social activity.',
//   //     details: {
//   //       facebookLinked: false,
//   //       twitterLinked: false,
//   //       instagramLinked: false,
//   //       linkedInLinked: false,
//   //       youtubeLinked: false,
//   //     },
//   //   },
//   //   localSeo: {
//   //     addressPhoneShown: false,
//   //     businessSchema: false,
//   //     googleBusinessProfile: false,
//   //   },
//   //   technology: {
//   //     technologies: [
//   //       { name: 'Cloudflare', version: '' },
//   //       { name: 'Google Analytics', version: '' },
//   //       { name: 'HTTP/3', version: '' },
//   //     ],
//   //     serverInfo: { ip: '172.67.168.121', server: 'cloudflare' },
//   //   },
//   // };

//   const [seoData, setSeoData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const apiUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:8000/api'; // Update with your backend URL

//   useEffect(() => {
//     const fetchSeoData = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/seo/data?url=https://www.fernandocodes.com`);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log(data); // Log the output from the backend
//         setSeoData(data);
//       } catch (err) {
//         console.error(err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSeoData();
//   }, [apiUrl]);


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;


//   // return (
//   //   <div className="seo-optimization p-8 space-y-12">
//   //     {/* Audit Summary Section */}
//   //     <div className="audit-summary bg-white p-6 rounded-lg shadow-lg">
//   //       <h1 className="text-3xl font-bold text-gray-800 mb-4">Audit Results for {seoData.siteName}</h1>
//   //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//   //         <div>
//   //           <h2 className="text-xl font-semibold text-gray-700">Overall Grade: {seoData.auditSummary.overallGrade}</h2>
//   //           <div className="progress-bar">
//   //             {/* Replace this with a visual grade indicator */}
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <h2 className="text-xl font-semibold text-gray-700">On-Page SEO: {seoData.auditSummary.onPageSeo}</h2>
//   //           <div className="progress-bar bg-green-200 h-4 rounded-full">
//   //             <div className="bg-green-500 h-4 rounded-full" style={{ width: '75%' }}></div>
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <h2 className="text-xl font-semibold text-gray-700">Links: {seoData.auditSummary.links}</h2>
//   //           <div className="progress-bar bg-red-200 h-4 rounded-full">
//   //             <div className="bg-red-500 h-4 rounded-full" style={{ width: '20%' }}></div>
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <h2 className="text-xl font-semibold text-gray-700">Usability: {seoData.auditSummary.usability}</h2>
//   //           <div className="progress-bar bg-green-200 h-4 rounded-full">
//   //             <div className="bg-green-500 h-4 rounded-full" style={{ width: '85%' }}></div>
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <h2 className="text-xl font-semibold text-gray-700">Performance: {seoData.auditSummary.performance}</h2>
//   //           <div className="progress-bar bg-green-200 h-4 rounded-full">
//   //             <div className="bg-green-500 h-4 rounded-full" style={{ width: '90%' }}></div>
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <h2 className="text-xl font-semibold text-gray-700">Social: {seoData.auditSummary.social}</h2>
//   //           <div className="progress-bar bg-red-200 h-4 rounded-full">
//   //             <div className="bg-red-500 h-4 rounded-full" style={{ width: '15%' }}></div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //       <p className="text-gray-500 mt-4">
//   //         Report Generated: {seoData.auditSummary.reportGenerated}{' '}
//   //         <a href="#" className="text-blue-500 underline">
//   //           Refresh Results Now
//   //         </a>
//   //       </p>
//   //     </div>

//   //     {/* Recommendations Section */}
//   //     <div className="recommendations bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommendations</h2>
//   //       <div className="flex flex-wrap gap-4 mb-4">
//   //         {/* Toggle buttons for filtering recommendations */}
//   //         {['Links', 'On-Page SEO', 'Social', 'Other', 'Performance', 'Usability'].map((category) => (
//   //           <button key={category} className="filter-button px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
//   //             {category}
//   //           </button>
//   //         ))}
//   //       </div>
//   //       <ul className="space-y-2">
//   //         {seoData.recommendations.map((rec, index) => (
//   //           <li key={index} className="p-4 bg-gray-50 rounded-lg shadow">
//   //             <h3 className="text-lg font-semibold">{rec.title}</h3>
//   //             <p className="text-gray-600">{rec.category} - {rec.priority} Priority</p>
//   //           </li>
//   //         ))}
//   //       </ul>
//   //     </div>

//   //     {/* On-Page SEO Results Section */}
//   //     <div className="on-page-seo bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">On-Page SEO Results</h2>
//   //       <p className="text-gray-600 mb-4">{seoData.onPageSeo.overview}</p>
//   //       <div className="mb-4">
//   //         <h3 className="text-lg font-semibold text-gray-700">Title Tag</h3>
//   //         <p className="text-gray-600">Content: {seoData.onPageSeo.titleTag.content}</p>
//   //         <p className="text-gray-600">Length: {seoData.onPageSeo.titleTag.length} characters</p>
//   //         <p className="text-gray-600">Recommendation: {seoData.onPageSeo.titleTag.recommendation}</p>
//   //       </div>
//   //       <div className="mb-4">
//   //         <h3 className="text-lg font-semibold text-gray-700">Meta Description Tag</h3>
//   //         <p className="text-gray-600">
//   //           {seoData.onPageSeo.metaDescription.exists ? 'Meta description is present.' : 'Meta description is missing.'}
//   //         </p>
//   //         <p className="text-gray-600">Recommendation: {seoData.onPageSeo.metaDescription.recommendation}</p>
//   //       </div>
//   //       <div className="mb-4">
//   //         <h3 className="text-lg font-semibold text-gray-700">Hreflang Usage</h3>
//   //         <p className="text-gray-600">{seoData.onPageSeo.hreflangUsage ? 'Hreflang attributes are used.' : 'Hreflang attributes are not used.'}</p>
//   //       </div>
//   //       <div className="mb-4">
//   //         <h3 className="text-lg font-semibold text-gray-700">Language</h3>
//   //         <p className="text-gray-600">Declared: {seoData.onPageSeo.language.declared}</p>
//   //       </div>
//   //       <div className="mb-4">
//   //         <h3 className="text-lg font-semibold text-gray-700">Header Tags Usage</h3>
//   //         <p className="text-gray-600">H1 Tag: {seoData.onPageSeo.headerTags.h1 ? 'Present' : 'Missing'}</p>
//   //         <p className="text-gray-600">H2 Tags: {seoData.onPageSeo.headerTags.h2}</p>
//   //         <p className="text-gray-600">H3 Tags: {seoData.onPageSeo.headerTags.h3}</p>
//   //         <p className="text-gray-600">H4 Tags: {seoData.onPageSeo.headerTags.h4}</p>
//   //         <p className="text-gray-600">H5 Tags: {seoData.onPageSeo.headerTags.h5}</p>
//   //         <p className="text-gray-600">H6 Tags: {seoData.onPageSeo.headerTags.h6}</p>
//   //       </div>
//   //       {/* Add more On-Page SEO details here... */}
//   //     </div>

//   //     {/* Links Results Section */}
//   //     <div className="links bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Links</h2>
//   //       <p className="text-gray-600 mb-4">{seoData.links.summary}</p>
//   //       <div className="grid grid-cols-2 gap-4">
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Domain Strength</h3>
//   //           <p className="text-gray-600">{seoData.links.metrics.domainStrength}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Page Strength</h3>
//   //           <p className="text-gray-600">{seoData.links.metrics.pageStrength}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Total Backlinks</h3>
//   //           <p className="text-gray-600">{seoData.links.metrics.totalBacklinks}</p>
//   //         </div>
//   //         {/* Add more link details here... */}
//   //       </div>
//   //     </div>

//   //     {/* Usability Results Section */}
//   //     <div className="usability bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Usability</h2>
//   //       <p className="text-gray-600">{seoData.usability.overview}</p>
//   //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//   //         <div className="text-center">
//   //           <h3 className="text-lg font-semibold text-gray-700">Mobile Score</h3>
//   //           <p className="text-gray-600">{seoData.usability.coreWebVitals.mobileScore}</p>
//   //         </div>
//   //         <div className="text-center">
//   //           <h3 className="text-lg font-semibold text-gray-700">Desktop Score</h3>
//   //           <p className="text-gray-600">{seoData.usability.coreWebVitals.desktopScore}</p>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     {/* Performance Results Section */}
//   //     <div className="performance bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Performance Results</h2>
//   //       <p className="text-gray-600">{seoData.performance.overview}</p>
//   //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">First Contentful Paint</h3>
//   //           <p className="text-gray-600">{seoData.performance.speedDetails.firstContentfulPaint}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Largest Contentful Paint</h3>
//   //           <p className="text-gray-600">{seoData.performance.speedDetails.largestContentfulPaint}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Time to Interactive</h3>
//   //           <p className="text-gray-600">{seoData.performance.speedDetails.timeToInteractive}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Total Blocking Time</h3>
//   //           <p className="text-gray-600">{seoData.performance.speedDetails.totalBlockingTime}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Cumulative Layout Shift</h3>
//   //           <p className="text-gray-600">{seoData.performance.speedDetails.cumulativeLayoutShift}</p>
//   //         </div>
//   //       </div>
//   //       <h3 className="text-lg font-semibold text-gray-700 mt-4">Opportunities</h3>
//   //       <ul className="list-disc list-inside">
//   //         {seoData.performance.opportunities.map((item, index) => (
//   //           <li key={index} className="text-gray-600">{item.suggestion} - Estimated Savings: {item.savings}</li>
//   //         ))}
//   //       </ul>
//   //     </div>

//   //     {/* Social Results Section */}
//   //     <div className="social bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Results</h2>
//   //       <p className="text-gray-600">{seoData.social.overview}</p>
//   //       <ul className="space-y-2">
//   //         {Object.keys(seoData.social.details).map((platform, index) => (
//   //           <li key={index} className="p-2 bg-gray-100 rounded-md">
//   //             <h3 className="text-lg font-semibold text-gray-700">{platform.replace('Linked', ' Profile Linked')}</h3>
//   //             <p className="text-gray-600">{seoData.social.details[platform] ? 'Linked' : 'Not Linked'}</p>
//   //           </li>
//   //         ))}
//   //       </ul>
//   //     </div>

//   //     {/* Local SEO Section */}
//   //     <div className="local-seo bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Local SEO</h2>
//   //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Address & Phone Shown</h3>
//   //           <p className="text-gray-600">{seoData.localSeo.addressPhoneShown ? 'Yes' : 'No'}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Business Schema</h3>
//   //           <p className="text-gray-600">{seoData.localSeo.businessSchema ? 'Yes' : 'No'}</p>
//   //         </div>
//   //         <div>
//   //           <h3 className="text-lg font-semibold text-gray-700">Google Business Profile</h3>
//   //           <p className="text-gray-600">{seoData.localSeo.googleBusinessProfile ? 'Yes' : 'No'}</p>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     {/* Technology Results Section */}
//   //     <div className="technology bg-white p-6 rounded-lg shadow-lg">
//   //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Results</h2>
//   //       <ul className="space-y-2">
//   //         {seoData.technology.technologies.map((tech, index) => (
//   //           <li key={index} className="p-2 bg-gray-100 rounded-md">
//   //             <h3 className="text-lg font-semibold text-gray-700">{tech.name}</h3>
//   //             <p className="text-gray-600">Version: {tech.version || 'N/A'}</p>
//   //           </li>
//   //         ))}
//   //       </ul>
//   //       <div className="mt-4">
//   //         <h3 className="text-lg font-semibold text-gray-700">Server Information</h3>
//   //         <p className="text-gray-600">IP: {seoData.technology.serverInfo.ip}</p>
//   //         <p className="text-gray-600">Server: {seoData.technology.serverInfo.server}</p>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

//   <div className="seo-optimization p-8 space-y-12">
//   {/* Render SEO data here */}
//   {/* This is just an example. Replace with actual rendering logic once you have the data */}
//   <div className="audit-summary bg-white p-6 rounded-lg shadow-lg">
//     <h1 className="text-3xl font-bold text-gray-800 mb-4">
//       Audit Results for {seoData?.siteName}
//     </h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {/* You can map through the SEO data and render each metric here */}
//       <div>
//         <h2 className="text-xl font-semibold text-gray-700">
//           Overall Grade: {seoData?.auditSummary?.overallGrade}
//         </h2>
//         <div className="progress-bar">
//           {/* Replace this with a visual grade indicator */}
//         </div>
//       </div>
//       {/* Continue rendering other sections of the data */}
//     </div>
//   </div>
// </div>

// };
