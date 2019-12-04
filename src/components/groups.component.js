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
import { Tile } from 'fundamental-react/Tile';
import { Image } from 'fundamental-react/Image';
import { Token } from 'fundamental-react/Token';

import { getServices, getGroupsForService, getPermissionsForGroup } from '../httpService/service'

export class Groups extends React.Component {
    state = {
        edited: {},
        services: [],
        selectedService: null,
        allGroups: [],
        groupsForService: {},
        groupServicePermissions: {},
    }

    componentDidMount() {
        (async () => {
            let services = await getServices()
            this.setState({ services: services })
            services.map(async service => {
                let groupsForService = await getGroupsForService(service);
                this.setState(state => {
                    state.groupsForService[service] = groupsForService
                    return state
                })
            })

            let groupPermissions = await getPermissionsForGroup()
        })()
    }

    render() {
        console.log(this.state)
        return (
            <Panel style={{ width: "100%" }}>
                <Panel.Header>
                    <Icon
                        glyph="group"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        title="Groups Permissions"
                        description="Assign permissions to predefined groups."
                    />
                    <Panel.Actions>
                        <Select style={{ width: "20rem" }}
                            onChange={(event) => { this.setState({ selectedService: event.parameters.selectedOption.innerText }) }}
                        >
                            {this.state.services.map(service => <Option selected={this.state.selectedService === service} value={service}>{service}</Option>)}
                        </Select>
                    </Panel.Actions>
                </Panel.Header>
                <Panel.Body style={{ background: "#edeff0" }}>
                    <Table
                        headers={[
                            'Name',
                            'Permissions',
                            ''
                        ]}
                        tableData={
                            /*this.state.groupsPerService[this.state.selectedService].map(groupName => {
                                return {
                                    rowData: [
                                        group,
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
                                        <Button glyph={this.state.editMode1 ? "save" : "edit"} option="light" onClick={() => {
                                            this.setState(state => {
                                                state.edited.push(this.state.groupsPerService[selectedService])
                                                return state
                                            })
                                        }}
                                        />
                                    ]
                                }
                            },
                            )*/

                            [
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
                            ]}
                    />
                </Panel.Body>
            </Panel>
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