import React, {useState} from 'react';
import { TopNavigation, Button } from '@cloudscape-design/components';
import Input from '@cloudscape-design/components/input';
// import { SearchField } from '@aws-amplify/ui-react'; // Amplify UI components
import './top-navigation.scss';

const Topbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const profileActions = [
      { id: 'profile', text: 'Profile' },
      { id: 'preferences', text: 'Preferences' },
      { id: 'security', text: 'Security' },
      { id: 'signout', text: 'Sign out' },
  ];
  return (
    <TopNavigation
      identity={{
        href: '/',
        title: 'HealthScribe',
        logo: { src: 'vite.svg', alt: 'Logo' },
      }}
      search={
        <Input
          ariaLabel="Input field"
          clearAriaLabel="Clear"
          value={searchValue}
          type="search"
          placeholder="Search"
          onChange={({ detail }) => setSearchValue(detail.value)}
        />
        // <SearchField
        //   label="Search"
        //   placeholder="Search here..."
        // />
      }
      utilities={[
        {
          type: 'button',
          iconName: 'notification',
          ariaLabel: 'Notifications',
          badge: true,
          disableUtilityCollapse: true,
        },
        // { type: 'button', text: 'Settings', href: '/settings' },
        // { type: 'button', text: 'Logout', href: '/logout' },
        {
            type: 'menu-dropdown',
            text: 'Shruthi Kedam',
            description: 'shruthi@example.com',
            iconName: 'user-profile',
            items: profileActions,
        }
      ]}
    />
  );
};

export default Topbar;