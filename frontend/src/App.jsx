import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { SeoProfile } from './pages/SeoProfile';
import { ContentManagement } from './pages/ContentManagement';  // Updated
import { ExternalAnalysis } from './pages/ExternalAnalysis';  // Updated
import { PerformanceAnalytics } from './pages/PerformanceAnalytics';  // Updated
import { SeoOptimization } from './pages/SeoOptimization';  // Updated
import { Tasks } from './pages/Tasks';
import { LocalSeo } from './pages/LocalSeo';
import { Settings } from './pages/Settings';
import { Layout } from './components/layout/Layout';

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="seo-profile" element={<SeoProfile />} />
                    <Route path="content-management" element={<ContentManagement />} />  {/* Updated */}
                    <Route path="external-analysis" element={<ExternalAnalysis />} />  {/* Updated */}
                    <Route path="performance-analytics" element={<PerformanceAnalytics />} />  {/* Updated */}
                    <Route path="seo-optimization" element={<SeoOptimization />} />  {/* Updated */}
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="localseo" element={<LocalSeo />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </div>
    );
};
