import DashboardIcon from '../assets/icons/dashboard.svg';
import SellerIcon from '../assets/icons/seller.svg';
import ClientsIcon from '../assets/icons/clients.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Accueil',
    },
    {
        id: 2,
        icon: ClientsIcon,
        path: '/clients',
        title: 'Clients',
    },
    {
        id: 3,
        icon: SellerIcon,
        path: '/sellers',
        title: 'Marchands',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/users',
        title: 'Utilisateurs',
    },
    {
        id: 5,
        icon: UserIcon,
        path: '/profile',
        title: 'Mon compte',
    }
]

export default sidebar_menu;