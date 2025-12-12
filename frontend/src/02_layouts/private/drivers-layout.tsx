import { FaHouse } from 'react-icons/fa6';
import { Outlet } from 'react-router';
import type { SidebarGroup } from '@/03_templates/_components/main-template-sidebar';
import MainTemplate from '@/03_templates/main-template';

const DriversLayout = () => {
  const sidebarGroups: SidebarGroup[] = [
    {
      group: 'Driver',
      links: [
        {
          name: 'Home',
          url: '/',
          icon: FaHouse,
        },
      ],
    },
  ];

  return (
    <MainTemplate sidebarGroups={sidebarGroups}>
      <Outlet />
    </MainTemplate>
  );
};

export default DriversLayout;
