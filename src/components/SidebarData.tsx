import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
    },
    
    {
        title: 'Drivers',
        path: '/drivers',
        icon: <FaIcons.FaUber />,
    },

    {
        title: 'Orders',
        path: '/orders',
        icon: <FaIcons.FaShoppingCart />,
    },

    {
        title: 'Routes',
        path: '/routes',
        icon: <FaIcons.FaMap />,
    },

    {
        title: 'Logout',
        path: '/logout',
        icon: <FaIcons.FaSignOutAlt />,
    },
]