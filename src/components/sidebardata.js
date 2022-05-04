import React from 'react'
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
        title: 'Voting + Rewards',
        path: '/awards',
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