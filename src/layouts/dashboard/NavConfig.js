// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  // {
  //   title: 'app',
  //   path: '/dashboard/app',
  //   icon: getIcon('eva:home-outline'),
  // },
  {
    title: 'home',
    path: '/dashboard/home',
    icon: getIcon('eva:home-outline'),
  },
  {
    title: 'calculate co₂',
    path: '/dashboard/calculate',
    icon: getIcon('bi:cloud-plus'),
  },
  {
    title: 'buy ambify',
    path: '/dashboard/buy',
    icon: getIcon('icons8:buy'),
  },
  {
    title: 'offset co₂',
    path: '/dashboard/offset',
    icon: getIcon('bi:sun'),
  },
  {
    title: 'download ambify',
    path: '/dashboard/transfer',
    icon: getIcon('eva:swap-fill'),
  },
  {
    title: 'settings',
    path: '/dashboard/settings',
    icon: getIcon('eva:settings-2-outline'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
];

export default navConfig;
