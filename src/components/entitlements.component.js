import React from 'react';

import { Icon } from 'fundamental-react/Icon';
import { Button } from 'fundamental-react/Button';
import { Panel } from 'fundamental-react/Panel';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { withRouter } from "react-router-dom";

export const Entitlements = withRouter(({ history }) => <Panel style={{ width: "100%" }}>
    <Panel.Header>
        <Panel.Head
            title="Entitlements"
            description="Keep track of your SAP C/4HANA entitlements in one place."
        />
    </Panel.Header>
    <Panel.Body style={{ background: "#edeff0" }}>
        <LayoutGrid>
            <Panel>
                <Panel.Header>
                    <Icon
                        glyph="group"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        description="Products"
                        title="SAP Service Cloud"
                    />
                </Panel.Header>
                <Panel.Body>
                    SAP Cloud for Customer
                            </Panel.Body>
                <Panel.Footer>
                    <Button
                        compact
                        glyph="action"
                        style={{ marginLeft: "auto" }}
                        onClick={() => {
                            window.open("https://master.d29oecan9pu8tt.amplifyapp.com/", "_blank")
                        }}
                    >
                    </Button>
                </Panel.Footer>
            </Panel>

            <Panel>
                <Panel.Header>
                    <Icon
                        glyph="group"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        description="Products"
                        title="SAP Customer Data Platform"
                    />
                </Panel.Header>
                <Panel.Body>
                    SAP Cloud for Customer
                            </Panel.Body>
                <Panel.Footer>
                    <Button
                        compact
                        glyph="action"
                        style={{ marginLeft: "auto" }}
                        onClick={() => {
                            window.open("http://localhost:8080/", "_blank")
                        }}
                    >
                    </Button>
                </Panel.Footer>
            </Panel>

            <Panel>
                <Panel.Header>
                    <Icon
                        glyph="group"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        description="Products"
                        title="SAP Sales Cloud"
                    />
                </Panel.Header>
                <Panel.Body>
                    SAP Cloud Platform
                                <br />
                    SAP Cloud for Customer
                            </Panel.Body>
                <Panel.Footer>
                    <Button
                        compact
                        glyph="action"
                        style={{ marginLeft: "auto" }}
                    >
                    </Button>
                </Panel.Footer>
            </Panel>

        </LayoutGrid>
    </Panel.Body>
</Panel >
)
    /*
render() {
return <Card
heading={"Groups"}
subtitle={
<Select
onChange={() => { }}
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