import React from 'react';
import { SideNavigation, SideNavigationProps } from '@cloudscape-design/components';
import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {

  // const [activePage, setActivePage] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const items: SideNavigationProps.Item[] = [
    { type: 'link', text: 'Dashboard', href: '/' },
    { type: 'link', text: 'Tickets', href: '/tickets' },
    { type: 'link', text: 'Clinical Notes', href: '/clinical_notes' },
    { type: 'link', text: 'Reports', href: '/reports' },
    { type: 'link', text: 'Knowledge Base', href: '/knowledge' },
    { type: 'link', text: 'Video', href: '/video' },
    { type: 'link', text: 'Settings', href: '/settings' },
    // { type: 'divider' },
    // { type: 'link', text: 'Documentation', href: 'https://cloudscape.design' },
  ];


  return (
    <SideNavigation
    //   header={{ text: 'My App', href: '/' }}
      // className="bg-[#002366] text-white"
      // className={styles['custom-sidebar']}
      className='.awsui_side-navigation'
      activeHref={location.pathname}
      items={items}
      onFollow={(event) => {
        event.preventDefault();
        navigate(event.detail.href);
      }}
      
    />
  );
};

export default Sidebar;