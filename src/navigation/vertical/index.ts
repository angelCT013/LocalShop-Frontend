// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Productos',
      icon: 'tabler:box',
    },
    {
      title: 'Usuarios',
      path: '/second-page',
      icon: 'tabler:user',
    },
    {
      title: 'Databases',
      path: '/home',
      icon: 'tabler:database',
    },
  ];
};

export default navigation;
