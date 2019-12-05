import React from 'react';

import { Icon } from 'fundamental-react/Icon';

import { Table } from 'fundamental-react/Table';
import { Button } from 'fundamental-react/Button';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Option } from '@ui5/webcomponents-react/lib/Option';

import { Switch } from '@ui5/webcomponents-react/lib/Switch';

import { Panel } from 'fundamental-react/Panel';
import { Toggle } from 'fundamental-react/Toggle';


import { getServices, getGroupsForService, getPermissionsForGroup, getAllGroups, getActiveVersions, getAllVersions } from '../httpService/service'

export class Groups extends React.Component {
    state = {
        edited: {},
        services: [],
        selectedService: null,
        allGroups: [],
        groupsForService: {},
        serviceGroupPermissions: {},
        permissionsForService: {},
        permissionsForGroup: {},
        allVersions: [],  //back
        allFullVersions: [],
        selectedVersion: "",  //local
        activeVersion: "",  //back
    }

    async processBackEndData(allGroups, services) {
        let serviceGroupPermissions = {}
        let groupsIterator = allGroups.map(async group => {
            let groupPermissions = await getPermissionsForGroup(group)
            this.setState(state => {
                state.permissionsForGroup[group] = groupPermissions
                return state
            })
            console.log(groupPermissions)
            groupPermissions.map(groupPermission => {
                if (!serviceGroupPermissions[groupPermission.service]) {
                    serviceGroupPermissions[groupPermission.service] = {}
                }
                if (!serviceGroupPermissions[groupPermission.service][group]) {
                    serviceGroupPermissions[groupPermission.service][group] = []
                }
                serviceGroupPermissions[groupPermission.service][group].push(groupPermission.permission)
            })
        })
        await Promise.all(groupsIterator)
        this.setState({ serviceGroupPermissions: serviceGroupPermissions })
        let permissionsForService = {}
        services.map(service => {
            serviceGroupPermissions[service] && Object.keys(serviceGroupPermissions[service]).sort().map(group => {
                serviceGroupPermissions[service][group].map(permission => {
                    if (!permissionsForService[service]) {
                        permissionsForService[service] = []
                    }
                    if (!permissionsForService[service].includes(permission))
                        permissionsForService[service].push(permission)
                })
            })
        })
        this.setState({ permissionsForService: permissionsForService })
    }

    async processOldVersionData(allGroups, services, getGroupPermissionsFunc) {
        let serviceGroupPermissions = {}
        services.map(service => {
            serviceGroupPermissions[service] = {}
        })
        let groupsIterator = allGroups.map(async group => {
            let groupPermissions = getGroupPermissionsFunc(group)
            console.log(groupPermissions)
            this.setState(state => {
                state.permissionsForGroup[group] = groupPermissions ? groupPermissions : []
                return state
            })
            groupPermissions && groupPermissions.map(groupPermission => {
                if (!serviceGroupPermissions[groupPermission.service]) {
                    serviceGroupPermissions[groupPermission.service] = {}
                }
                if (!serviceGroupPermissions[groupPermission.service][group]) {
                    serviceGroupPermissions[groupPermission.service][group] = []
                }
                serviceGroupPermissions[groupPermission.service][group].push(groupPermission.permission)
            })
        })
        await Promise.all(groupsIterator)
        this.setState({ serviceGroupPermissions: serviceGroupPermissions })
        let permissionsForService = {}
        services.map(service => {
            serviceGroupPermissions[service] && Object.keys(serviceGroupPermissions[service]).sort().map(group => {
                serviceGroupPermissions[service][group].map(permission => {
                    if (!permissionsForService[service]) {
                        permissionsForService[service] = []
                    }
                    if (!permissionsForService[service].includes(permission))
                        permissionsForService[service].push(permission)
                })
            })
        })
        this.setState({ permissionsForService: permissionsForService })
    }

    async processVersionsData() {
        let allFullVersions = await getAllVersions(this.state.selectedService);
        let allVersions = allFullVersions.map(version => version.name)
        this.setState({ allVersions: allVersions, allFullVersions: allFullVersions })

        let activeVersion = await getActiveVersions();

        let currentVersion = allVersions.find(version => version._id === activeVersion.versionId)
        this.setState({ activeVersion: currentVersion, selectedVersion: currentVersion })
    }

    async processAllGroupsData() {
        let allGroups = await getAllGroups()
        this.setState({ allGroups: allGroups })
        return allGroups
    }

    async processAllServicesData() {
        let services = await getServices()
        this.setState({ services: services, selectedService: services[0] })

        services.map(async service => {
            let groupsForService = await getGroupsForService(service);
            this.setState(state => {
                state.groupsForService[service] = groupsForService
                return state
            })
        })
        return services
    }

    componentDidMount() {
        (async () => {

            let [allGroups, services] = await Promise.all([this.processAllGroupsData(), this.processAllServicesData()])

            this.processVersionsData()

            this.processBackEndData(allGroups, services)
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
                        <div style={{ display: "flex" }}>
                            <Select style={{ width: "20rem", marginRight: "1rem" }}
                                onChange={(event) => { this.setState({ selectedService: event.parameters.selectedOption.innerText }, ()=>{
                                    this.processVersionsData()
                                }) }}
                            >
                                {this.state.services.map(service => <Option selected={this.state.selectedService === service} value={service}>{service}</Option>)}
                            </Select>

                            <Select style={{ width: "5rem", marginRight: "1rem" }}
                                onChange={(event) => {
                                    this.setState({ selectedVersion: event.parameters.selectedOption.innerText }, () => {
                                        if (this.state.selectedVersion == this.state.activeVersion)
                                            this.processBackEndData(this.state.allGroups, this.state.services)
                                        else
                                            this.processOldVersionData(this.state.allGroups, this.state.services, (group) => {
                                                let curVersion = this.state.allFullVersions.find(version => version.name === this.state.selectedVersion && version.service === this.state.selectedService)
                                                console.log(curVersion)
                                                let permissions = curVersion.permissions[group] && curVersion.permissions[group].map(permission => {return {service: this.state.selectedService, permission:permission}})
                                                console.log(permissions)
                                                return permissions
                                            })

                                    })
                                }}
                            >
                                {this.state.allVersions.map(version => <Option selected={this.state.selectedVersion === version} value={version}>{version}</Option>)}
                            </Select>
                            <div style={{ margin: "auto", display: "flex" }}>

                                <Switch
                                    checked={this.state.selectedVersion === this.state.activeVersion ? true : false}
                                    disabled={this.state.selectedVersion === this.state.activeVersion ? true : false}
                                />
                                <div style={this.state.selectedVersion == this.state.activeVersion ? { color: "green", margin: "auto" } : { color: "red", margin: "auto" }}>
                                    {this.state.selectedVersion == this.state.activeVersion ? "Activated" : "Outdated"}
                                </div>

                            </div>
                        </div>
                    </Panel.Actions>
                </Panel.Header >
                <Panel.Body style={{ background: "#edeff0" }}>
                    <Table
                        headers={[
                            'Name',
                            'Permissions',
                            ''
                        ]}
                        tableData={
                            (this.state.groupsForService &&
                                this.state.groupsForService[this.state.selectedService]) ?
                                this.state.groupsForService[this.state.selectedService].map(groupName => {
                                    return {
                                        rowData: [
                                            groupName,
                                            <div>
                                                {
                                                    this.state.permissionsForService[this.state.selectedService] && this.state.permissionsForService[this.state.selectedService].map(permission =>
                                                        <CheckBox
                                                            disabled={false}
                                                            readonly={!this.state.edited[groupName]}
                                                            checked={this.state.serviceGroupPermissions[this.state.selectedService][groupName] && this.state.serviceGroupPermissions[this.state.selectedService][groupName].includes(permission)}
                                                            text={permission}
                                                            valueState={null}
                                                            wrap={false}
                                                            onChange={() => {
                                                                if (this.state.serviceGroupPermissions[this.state.selectedService][groupName].includes(permission)) {
                                                                    var newPermissions = this.state.serviceGroupPermissions[this.state.selectedService][groupName].filter(function (value) {
                                                                        return value != permission;
                                                                    });
                                                                    let newServiceGroupPermissions = { ...this.state.serviceGroupPermissions };
                                                                    newServiceGroupPermissions[this.state.selectedService][groupName] = newPermissions;
                                                                    let newPermissionsForGroup = { ...this.state.permissionsForGroup };
                                                                    newPermissionsForGroup[groupName] = newPermissions;
                                                                    this.setState({ serviceGroupPermissions: newServiceGroupPermissions, permissionsForGroup: newPermissionsForGroup })
                                                                } else {
                                                                    var newPermissions = [...this.state.serviceGroupPermissions[this.state.selectedService][groupName]];
                                                                    newPermissions.push(permission)
                                                                    let newServiceGroupPermissions = { ...this.state.serviceGroupPermissions };
                                                                    newServiceGroupPermissions[this.state.selectedService][groupName] = newPermissions;
                                                                    let newPermissionsForGroup = { ...this.state.permissionsForGroup };
                                                                    newPermissionsForGroup[groupName] = newPermissions;
                                                                    this.setState({ serviceGroupPermissions: newServiceGroupPermissions, permissionsForGroup: newPermissionsForGroup })
                                                                }
                                                            }}
                                                        />
                                                    )
                                                }
                                            </div>,
                                            <Button glyph={this.state.edited[groupName] === true ? "save" : "edit"} option="light" onClick={() => {
                                                if (this.state.edited[groupName]) {
                                                    //this.post - change permissions for group - this.state.permissionsForGroup
                                                    //create new version with new permissions and make it active
                                                }
                                                this.setState(state => {
                                                    state.edited[groupName] = !state.edited[groupName]
                                                    return state
                                                })
                                            }}
                                            />
                                        ]
                                    }
                                },
                                )
                                :
                                []
                        }
                    />
                </Panel.Body>
            </Panel >
        )
    }
}