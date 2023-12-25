import DashboardIcon from '../assets/icons/dashboard.svg';
import SellerIcon from '../assets/icons/seller.svg';
import ClientsIcon from '../assets/icons/clients.svg';
import UserIcon from '../assets/icons/user.svg';
import UsersIcon from '../assets/icons/users.svg';
import ReceiptIcon from '../assets/icons/receipt.svg'
import liquidationIcon from '../assets/icons/liquidation.svg'

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Accueil',
        alwaysDisplay:true
    },
    {
        id: 2,
        icon: ClientsIcon,
        path: '/clients',
        title: 'Clients',
        adminOnly:true
    },
    {
        id: 3,
        icon: SellerIcon,
        path: '/merchands',
        title: 'Marchands',
        adminOnly:true
    },
    {
        id: 4,
        icon: UsersIcon,
        path: '/users',
        title: 'Utilisateurs',
        adminOnly:true
    },
    {
        id: 5,
        icon: ReceiptIcon,
        path: '/transactions',
        title: 'Transactions',
        adminOnly:true
    },
    {
        id: 6,
        icon: liquidationIcon,
        path: '/liquidations',
        title: 'Liquidations',
        adminOnly:true
    },
    {
        id: 7,
        icon: ReceiptIcon,
        path: '/transaction',
        title: 'Transaction',
        adminOnly:false
    },
    {
        id: 8,
        icon: liquidationIcon,
        path: '/liquidation',
        title: 'Liquidation',
        adminOnly:false
    },
    {
        id: 9,
        icon: UserIcon,
        path: '/profile',
        title: 'Mon compte',
        alwaysDisplay:true
    }
]

export default sidebar_menu;