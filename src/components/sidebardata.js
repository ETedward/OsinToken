import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <IoIcons.IoIosAnalytics/>,
        cName: 'nav-text'
    },
    {
        title: 'News and Rewards',
        path: '/news',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'People',
        path: '/people',
        icon: <AiIcons.AiOutlineTeam/>,
        cName: 'nav-text'
    }

]