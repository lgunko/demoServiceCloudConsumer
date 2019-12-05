import React from 'react';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Card } from '@ui5/webcomponents-react/lib/Card'

import { Icon } from 'fundamental-react/Icon';

import { Table } from 'fundamental-react/Table';
//import { Popover } from 'fundamental-react/Popover';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { Menu } from 'fundamental-react/Menu';
import { Button } from 'fundamental-react/Button';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Option } from '@ui5/webcomponents-react/lib/Option';

import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';

import { Panel } from 'fundamental-react/Panel';
import { Toggle } from 'fundamental-react/Toggle';
import { Tile } from 'fundamental-react/Tile';
import { Image } from 'fundamental-react/Image';
import { Token } from 'fundamental-react/Token';

import { getServices, getGroupsForService, getPermissionsForGroup, getAllGroups } from '../httpService/service'

export class Clients extends React.Component {

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
                                        'https://bundle.service.sap.com',
                                        <span style={{ color: "green" }}>Active</span>,
                                        '1 min ago',
                                        <Button glyph="edit" option="light"/>,
                                        <Button glyph="attachment-text-file" option="light"/>,
                                    ]
                                },
                                {
                                    rowData: [
                                        'SAP Marketing Cloud',
                                        'https://bundle.marketing.cloud.faros.sap.com',
                                        <span style={{ color: "green" }}>Active</span>,
                                        '2 min ago',
                                        <Button glyph="edit" option="light"/>,
                                        <Button glyph="attachment-text-file" option="light"/>,
                                    ]
                                },
                                {
                                    rowData: [
                                        'SAP Sales Cloud',
                                        '',
                                        <span style={{ color: "red" }}>Not Active</span>,
                                        '',
                                        <Button glyph="activate" option="light"/>,
                                        //<Button glyph="attachment-text-file" option="light"/>,
                                    ]
                                },
                            ]

                            /*[
                                {
                                    rowData: [
                                        'Administrator',
                                        <div>
                                            <CheckBox
                                                disabled={false}
                                                readonly={!this.state.edited['Administrator']}
                                                checked={true}
                                                text={"ViewContactData"}
                                                valueState={null}
                                                wrap={false}
                                                onChange={() => { console.log("ViewContactData") }}
                                            />
                                            <CheckBox
                                                disabled={false}
                                                readonly={!this.state.edited['Administrator']}
                                                checked={true}
                                                text={"ViewServiceRequests"}
                                                valueState={null}
                                                wrap={false}
                                                onChange={() => { console.log("ViewServiceRequests") }}
                                            />
                                        </div>,
                                        <Button glyph={this.state.edited['Administrator'] === true ? "save" : "edit"} option="light" onClick={() => {
                                            this.setState(state => {
                                                state.edited['Administrator'] = !state.edited['Administrator']
                                                return state
                                            })
                                        }}
                                        />
                                    ]
                                },
                                {
                                    rowData: [
                                        'ServiceEngineer',
                                        <div>
                                            <CheckBox
                                                disabled={false}
                                                readonly={!this.state.edited['ServiceEngineer']}
                                                checked={false}
                                                text={"ViewContactData"}
                                                valueState={null}
                                                wrap={false}
                                                onChange={() => { console.log("ViewContactData") }}
                                            />
                                            <CheckBox
                                                disabled={false}
                                                readonly={!this.state.edited['ServiceEngineer']}
                                                checked={true}
                                                text={"ViewServiceRequests"}
                                                valueState={null}
                                                wrap={false}
                                                onChange={() => { console.log("ViewServiceRequests") }}
                                            />
                                        </div>,
                                        <Button glyph={this.state.edited['ServiceEngineer'] === true ? "save" : "edit"} option="light" onClick={() => {
                                            this.setState(state => {
                                                state.edited['ServiceEngineer'] = !state.edited['ServiceEngineer']
                                                return state
                                            })
                                        }}
                                        />
                                    ]
                                }
                            ]*/
                        }
                    />
                </Panel.Body>
            </Panel >
        )
    }
    /*
        render() {
            return <Card
                heading={"Groups"}
                subtitle={
                    <Select
                        onChange={()=>{}}
                    >
                        <Option selected icon="sap-icon://add">Test 1</Option>
                        <Option icon="sap-icon://add">Test 2</Option>
                        <Option icon="sap-icon://add">Test 3</Option>
                        <Option icon="sap-icon://add">Test 4</Option>
                        <Option icon="sap-icon://add">Test 5</Option>
                    </Select>
                }
                status={"Total : 3"}
                avatar={"action-settings"}
                headerInteractive={false}
                onHeaderClick={() => {
                    console.log("onHeaderClick")
                }}
            >
                {
    
                    <Table
                        headers={[
                            'Name',
                            'Permissions',
                            ''
                        ]}
                        tableData={[
                            {
                                rowData: [
                                    'Administrator',
                                    <div>
                                        <CheckBox
                                            disabled={false}
                                            readonly={!this.state.editMode1}
                                            checked={true}
                                            text={"ViewContactData"}
                                            valueState={null}
                                            wrap={false}
                                            onChange={() => { console.log("ViewContactData") }}
                                        />
                                        <CheckBox
                                            disabled={false}
                                            readonly={!this.state.editMode1}
                                            checked={true}
                                            text={"ViewServiceRequests"}
                                            valueState={null}
                                            wrap={false}
                                            onChange={() => { console.log("ViewServiceRequests") }}
                                        />
                                    </div>,
                                    <Button glyph="edit" option="light" onClick={() => {
                                        this.setState(state => {
                                            state.editMode1 = !state.editMode1
                                            return state
                                        })
                                    }}
                                    />
                                ]
                            },
                            {
                                rowData: [
                                    'ServiceEngineer',
                                    <div>
                                        <CheckBox
                                            disabled={false}
                                            readonly={!this.state.editMode1}
                                            checked={false}
                                            text={"ViewContactData"}
                                            valueState={null}
                                            wrap={false}
                                            onChange={() => { console.log("ViewContactData") }}
                                        />
                                        <CheckBox
                                            disabled={false}
                                            readonly={!this.state.editMode1}
                                            checked={true}
                                            text={"ViewServiceRequests"}
                                            valueState={null}
                                            wrap={false}
                                            onChange={() => { console.log("ViewServiceRequests") }}
                                        />
                                    </div>,
                                    <Button glyph="edit" option="light" onClick={() => {
                                        this.setState(state => {
                                            state.editMode2 = !state.editMode2
                                            return state
                                        })
                                    }}
                                    />
                                ]
                            }
                        ]}
                    />
    
                }
    
    
            </Card>
        }
        */
}