import React from 'react';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Card } from '@ui5/webcomponents-react/lib/Card'

export class MyTable extends React.Component {
    render() {
        return <Card
            heading={"Service Requests"}
            subtitle={"Network Service"}
            status={"2 in Process"}
            avatar={"https://avatars.mds.yandex.net/get-pdb/770122/25849f56-e571-489c-bbf3-739e63ac5a5a/s1200"}
            headerInteractive={false}
            onHeaderClick={() => {
                console.log("onHeaderClick")
            }}
        >
            <Table
                stickyColumnHeader={true}
                columns={[
                    <TableColumn>
                        <Label>Date Opened</Label>
                    </TableColumn>,
                    <TableColumn>
                        <Text>SLA Timeline</Text>
                    </TableColumn>,
                    <TableColumn>
                        <Text>Customer Name</Text>
                    </TableColumn>,
                    <TableColumn>
                        <Text>Customer Phone</Text>
                    </TableColumn>
                ]}
            >
                <TableRow>
                    <TableCell>
                        <Label>
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(new Date().getTime() - 24 * 3600 * 1000))}
                        </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(new Date().getTime() + 24 * 3600 * 1000))}
                        </Label>
                    </TableCell>
                    <TableCell>
                        <Label>Silver Express Group</Label>
                    </TableCell>
                    <TableCell>
                        <Label>+49 157 09894567</Label>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Label>
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(new Date().getTime() - 48 * 3600 * 1000))}
                        </Label>
                    </TableCell>
                    <TableCell>
                        <Label>
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(new Date().getTime() + 48 * 3600 * 1000))}
                        </Label>
                    </TableCell>
                    <TableCell>
                        <Label>Golden International</Label>
                    </TableCell>
                    <TableCell>
                        <Label>+49 124 89245829</Label>
                    </TableCell>
                </TableRow>
            </Table>
        </Card>
    }
}