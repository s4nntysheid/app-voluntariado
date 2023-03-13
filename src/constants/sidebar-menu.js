import DashboardIcon from '../assets/icons/dashboard.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: UserIcon,
        path: '/voluntarios',
        title: 'Voluntários',
    }
    /* 
    ,{
        id: 4,
        icon: UserIcon,
        path: '/base',
        title: 'base',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/base',
        title: 'base',
    } */
]

export default sidebar_menu;