import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUserCog, FaTasks, FaClipboardList, FaChartLine, FaCog, FaLink, FaMapMarkerAlt, FaPenNib, FaWrench, FaFileAlt, FaNetworkWired, FaEye } from 'react-icons/fa';

export const Sidebar = () => {
    const location = useLocation();

    const links = [
        { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
        { to: "/dashboard/seo-profile", label: "SEO Profile", icon: <FaPenNib /> },
        { to: "/dashboard/content", label: "Content Management", icon: <FaClipboardList /> },
        { to: "/dashboard/competitors", label: "Competitor Analysis", icon: <FaChartLine /> },
        { to: "/dashboard/backlinks", label: "Backlink Management", icon: <FaLink /> },
        { to: "/dashboard/reports", label: "Reports and Analytics", icon: <FaChartLine /> },
        { to: "/dashboard/tasks", label: "Task Automation", icon: <FaTasks /> },
        { to: "/dashboard/localseo", label: "Local SEO", icon: <FaMapMarkerAlt /> },
        { to: "/dashboard/technical-seo", label: "Technical SEO", icon: <FaWrench /> },
        { to: "/dashboard/on-page-seo", label: "On-Page SEO", icon: <FaFileAlt /> },
        { to: "/dashboard/content-strategy", label: "Content Strategy", icon: <FaClipboardList /> },
        { to: "/dashboard/off-page-seo", label: "Off-Page SEO", icon: <FaNetworkWired /> },
        { to: "/dashboard/analytics", label: "Analytics", icon: <FaEye /> },
        { to: "/dashboard/settings", label: "Settings", icon: <FaUserCog /> },
    ];

    return (
        <div className="w-64 h-full bg-gray-900 text-white flex flex-col">
            <div className="flex items-center justify-center py-6">
                <h1 className="text-2xl font-bold">InsightRank AI</h1>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.to}
                                className={`flex items-center px-4 py-3 space-x-3 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 ${
                                    location.pathname === link.to ? 'bg-gray-700' : ''
                                }`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center justify-center py-4 border-t border-gray-800">
                <p className="text-xs text-gray-500">© 2024 InsightRank AI</p>
            </div>
        </div>
    );
};
