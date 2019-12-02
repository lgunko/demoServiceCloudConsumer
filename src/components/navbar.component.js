import React from 'react';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState'

export class NavBar extends React.Component {
    render() {
        return <SideNavigation
            openState={SideNavigationOpenState.Expanded}
            selectedId={'calendar'}
            onItemSelect={()=>{
                console.log("onItemSelect")
            }}
            noIcons={false}
            style={{ height: '100%' }}
            footerItems={[
                <SideNavigationListItem id="footer1" text="Legal Information" icon="sap-icon://compare" />,
                <SideNavigationListItem id="footer2" text="Useful Links" icon="sap-icon://chain-link" />
            ]}
        >
            <SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" tooltip="Nav To Home" />
            <SideNavigationListItem text="Calendar" icon="sap-icon://calendar" id="calendar" />
            <SideNavigationListItem text="Customers" icon="sap-icon://employee" id="customers" />
            <SideNavigationListItem text="Sales" icon="sap-icon://lead" id="sales" tooltip="Sales">
                <SideNavigationListItem
                    text="My Opportunities"
                    icon="sap-icon://home"
                    id="sales-opportunities"
                    tooltip="sales-opportunities"
                />
                <SideNavigationListItem text="My Leads" icon="sap-icon://home" id="sales-leads" />
                <SideNavigationListItem text="My CPQS" icon="sap-icon://home" id="sales-cpqs" />
            </SideNavigationListItem>
            <SideNavigationListItem text="Deliveries" icon="sap-icon://add-product" id="delivieries" />
        </SideNavigation>
    }
}

