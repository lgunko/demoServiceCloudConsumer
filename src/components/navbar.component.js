import React from 'react';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState'

export class NavBar extends React.Component {
    render() {
        return <SideNavigation
            openState={SideNavigationOpenState.Expanded}
            selectedId={'Opened Requests'}
            onItemSelect={() => {
                console.log("onItemSelect")
            }}
            noIcons={true}
            style={{ height: '100%' }}
            footerItems={[
                <SideNavigationListItem id="footer1" text="Legal Information" icon="sap-icon://compare" />,
                <SideNavigationListItem id="footer2" text="Useful Links" icon="sap-icon://chain-link" />
            ]}
        >
            <SideNavigationListItem text="Opened Requests" icon="sap-icon://home" id="Opened Requests" />
            <SideNavigationListItem text="Manage Authorization" icon="sap-icon://calendar" id="Manage Authorization" >
                <SideNavigationListItem
                    text="Users"
                    icon="sap-icon://home"
                    id="Users"
                    tooltip="sales-opportunities"
                />
                <SideNavigationListItem text="Groups" icon="sap-icon://home" id="Groups" />
            </SideNavigationListItem>
        </SideNavigation>
    }
}

