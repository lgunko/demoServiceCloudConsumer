import React from 'react';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Card } from '@ui5/webcomponents-react/lib/Card'

export class Welcome extends React.Component {
    render() {
        return <div style={{width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "100%",
            backgroundImage: "url(/back.png)"}}></div>
    }
}