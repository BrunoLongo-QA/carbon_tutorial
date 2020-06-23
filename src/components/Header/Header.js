import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';

const TopHeader = () => (
  <Header aria-label="LAI9-logo">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="">
      LA Innovations - Automation Request
    </HeaderName>
    {/* <HeaderName aria-label="LAI9" href="/" prefix="">
                LA Innovations - Automation Request
            </HeaderName> */}
    <HeaderNavigation aria-label="Automation Catalog">
      <HeaderMenuItem element={Link} to="/repos">
        Automation Catalog
      </HeaderMenuItem>
      {/* <HeaderMenuItem href="">Automation Catalog</HeaderMenuItem> */}
    </HeaderNavigation>
    {/* <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Notifications">
                    <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="User Avatar">
                    <UserAvatar20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App Switcher">
                    <AppSwitcher20 />
                </HeaderGlobalAction>
        </HeaderGlobalBar> */}
  </Header>
);

export default TopHeader;
