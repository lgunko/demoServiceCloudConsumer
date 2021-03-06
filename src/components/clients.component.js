import React from 'react';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Card } from '@ui5/webcomponents-react/lib/Card'

import { Icon } from 'fundamental-react/Icon';


//import { Popover } from 'fundamental-react/Popover';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { Menu } from 'fundamental-react/Menu';

import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Option } from '@ui5/webcomponents-react/lib/Option';

import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';

import { Button } from 'fundamental-react/Button';
import { Table } from 'fundamental-react/Table';
import { Panel } from 'fundamental-react/Panel';
import { Toggle } from 'fundamental-react/Toggle';
import { Tile } from 'fundamental-react/Tile';
import { Image } from 'fundamental-react/Image';
import { Token } from 'fundamental-react/Token';

import { getServices, getGroupsForService, getPermissionsForGroup, getAllGroups } from '../httpService/service'

import { getAllVersions, getTimestamp, getActiveVersions } from '../httpService/service'

export class Clients extends React.Component {

    componentDidMount() {
        (async () => {
            let activeVersions = await getActiveVersions();
            let activeVersion = activeVersions.find(version => version._id === 'SAP Service Cloud')
            let sscVersions = await getAllVersions('SAP Service Cloud')
            let currentFullVersion = sscVersions.find(version => version._id === activeVersion.versionId && version.service === activeVersion._id)
            let timestamp = (await getTimestamp()).now
            if ((timestamp - currentFullVersion.timestamp) < 1000 * 60) {
                this.setState({ sscLoading: true })
            } else {
                this.setState({ sscFetchedLast: Math.floor((timestamp - currentFullVersion.timestamp) / 1000 / 60) })
            }

            activeVersion = activeVersions.find(version => version._id === 'SAP Customer Data Platform')
            let ssmVersions = await getAllVersions('SAP Customer Data Platform')
            currentFullVersion = ssmVersions.find(version => version._id === activeVersion.versionId && version.service === activeVersion._id)

            if ((timestamp - currentFullVersion.timestamp) < 1000 * 60) {
                this.setState({ ssmLoading: true })
            } else {
                this.setState({ ssmFetchedLast: Math.floor((timestamp - currentFullVersion.timestamp) / 1000 / 60) })
            }
        })()
        setInterval((async () => {
            let activeVersions = await getActiveVersions();
            let activeVersion = activeVersions.find(version => version._id === 'SAP Service Cloud')
            let sscVersions = await getAllVersions('SAP Service Cloud')
            let currentFullVersion = sscVersions.find(version => version._id === activeVersion.versionId && version.service === activeVersion._id)
            let timestamp = (await getTimestamp()).now
            if ((timestamp - currentFullVersion.timestamp) < 1000 * 60) {
                this.setState({ sscLoading: true })
            } else {
                this.setState({ sscFetchedLast: Math.floor((timestamp - currentFullVersion.timestamp) / 1000 / 60) })
            }

            activeVersion = activeVersions.find(version => version._id === 'SAP Customer Data Platform')
            let ssmVersions = await getAllVersions('SAP Customer Data Platform')
            currentFullVersion = ssmVersions.find(version => version._id === activeVersion.versionId && version.service === activeVersion._id)

            if ((timestamp - currentFullVersion.timestamp) < 1000 * 60) {
                this.setState({ ssmLoading: true })
            } else {
                this.setState({ ssmFetchedLast: Math.floor((timestamp - currentFullVersion.timestamp) / 1000 / 60) })
            }
        }), 5000);
    }

    render() {
        return (
            <Panel style={{ width: "100%" }}>
                <Panel.Header>
                    <Icon
                        glyph="settings"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        title="Agents settings"
                        description=""
                    />
                    <Panel.Actions>
                        <div style={{ display: "flex" }}>
                            <Button>Add new</Button>
                        </div>
                    </Panel.Actions>
                </Panel.Header >
                <Panel.Body style={{ background: "#edeff0" }}>
                    <Table
                        headers={[
                            'Name',
                            'Bundle Server Url',
                            'Status',
                            'Last Update',
                            '',
                            'Logs'
                        ]}
                        tableData={
                            [
                                {
                                    rowData: [
                                        'SAP Service Cloud',
                                        'http://bundle-1168353036.eu-central-1.elb.amazonaws.com/bundle/federator/v1/location/bundle.tar.gz',
                                        <span style={{ color: "green" }}>Active</span>,
                                        <span>{this.state && (this.state.sscLoading ? "Updating now..." : (this.state.sscFetchedLast + ' minutes ago'))}</span>,
                                        <Button glyph="edit" option="light" />,
                                        <Button glyph="attachment-text-file" option="light" />,
                                    ]
                                },
                                {
                                    rowData: [
                                        'SAP Customer Data Platform',
                                        'http://bundle-1168353036.eu-central-1.elb.amazonaws.com/bundle/federator/v1/location/bundle.tar.gz',
                                        <span style={{ color: "green" }}>Active</span>,
                                        <span>{this.state && (this.state.ssmLoading ? "Updating now..." : (this.state.ssmFetchedLast + ' minutes ago'))}</span>,
                                        <Button glyph="edit" option="light" />,
                                        <Button glyph="attachment-text-file" option="light" />,
                                    ]
                                },
                                {
                                    rowData: [
                                        'SAP Sales Cloud',
                                        '',
                                        <span style={{ color: "red" }}>Not Active</span>,
                                        '',
                                        <Button glyph="activate" option="light" />,
                                        //<Button glyph="attachment-text-file" option="light"/>,
                                    ]
                                },
                            ]
                        }
                    />
                </Panel.Body>
            </Panel >
        )
    }
}