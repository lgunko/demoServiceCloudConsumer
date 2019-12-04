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
        let name = parseJwt(window.sessionStorage.getItem("id_token"))["first_name"]
        let duser = parseJwt(window.sessionStorage.getItem("id_token"))["login_name"]

        return <div style={{
            width: "100%",
            display: "flex",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "100%",
            backgroundImage: "url(/back.png)"
        }}>
            <div style={{
                color: "white",
                margin: "auto",
                marginTop: "40px",
                fontFamily: "sans-serif",
                fontSize: "large",
                textAlign: "center"
            }}>
                Welcome {name} ({duser})!
                <br/>
                SAP C/4HANA
            </div>
        </div >
    }
}