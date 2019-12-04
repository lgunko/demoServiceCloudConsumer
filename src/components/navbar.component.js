import React from 'react';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState'
import { withRouter } from "react-router-dom";

const routes = {
    serviceCloud: "/serviceCloud",
    entitlements: "/entitlements",
    security: "/security",
}

export const NavBar = withRouter(({ history }) =>
    <SideNavigation
        openState={SideNavigationOpenState.Expanded}
        selectedId={history.location.pathname.replace('/','')}
        onItemSelect={(data1) => {
            console.log("OnItemSelected")
            console.log(data1.parameters.selectedId)
            history.push(routes[data1.parameters.selectedId]);
        }}
        noIcons={true}
        style={{ height: '100%' }}
        footerItems={[
            <SideNavigationListItem id="footer1" text="Legal Information" icon="sap-icon://accept" />,
            <SideNavigationListItem id="footer2" text="Useful Links" icon="sap-icon://chain-link" />
        ]}
    >
        <SideNavigationListItem text="Home" icon="sap-icon://home" id="" />
        <SideNavigationListItem text="Entitlements" icon="sap-icon://home" id="entitlements" />
        <SideNavigationListItem text="Security" /*icon="sap-icon://calendar"*/ id="security" />
    </SideNavigation>
);