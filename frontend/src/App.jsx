import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { SeoProfile } from './pages/SeoProfile';
import { Content } from './pages/Content';
import { Competitors } from './pages/Competitors';
import { Backlinks } from './pages/Backlinks';
import { Reports } from './pages/Reports';
import { Tasks } from './pages/Tasks';
import { LocalSeo } from './pages/LocalSeo';
import { Settings } from './pages/Settings';
import { TechnicalSeoPage } from './pages/TechnicalSeoPage';
import { OnPageSeoPage } from './pages/OnPageSeoPage';
import { ContentStrategyPage } from './pages/ContentStrategyPage';
import { OffPageSeo } from './pages/OffPageSeo';
import { Analytics } from './pages/Analytics';
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
                    <Route path="content" element={<Content />} />
                    <Route path="competitors" element={<Competitors />} />
                    <Route path="backlinks" element={<Backlinks />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="localseo" element={<LocalSeo />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="technical-seo" element={<TechnicalSeoPage />} />
                    <Route path="on-page-seo" element={<OnPageSeoPage />} />
                    <Route path="content-strategy" element={<ContentStrategyPage />} />
                    <Route path="off-page-seo" element={<OffPageSeo />} />
                    <Route path="analytics" element={<Analytics />} />
                </Route>
            </Routes>
        </div>
    );
};
