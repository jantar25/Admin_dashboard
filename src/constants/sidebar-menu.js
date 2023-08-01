import DashboardIcon from '../assets/icons/dashboard.svg';
import SellerIcon from '../assets/icons/seller.svg';
import ClientsIcon from '../assets/icons/clients.svg';
import UserIcon from '../assets/icons/user.svg';
import UsersIcon from '../assets/icons/users.svg';
import ReceiptIcon from '../assets/icons/receipt.svg'

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
        path: '/merchands',
        title: 'Marchands',
    },
    {
        id: 4,
        icon: UsersIcon,
        path: '/users',
        title: 'Utilisateurs',
    },
    {
        id: 5,
        icon: ReceiptIcon,
        path: '/transactions',
        title: 'Transactions',
    },
    {
        id: 6,
        icon: UserIcon,
        path: '/profile',
        title: 'Mon compte',
    }
]

export default sidebar_menu;