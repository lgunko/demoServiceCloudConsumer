import React from 'react';
import { Panel } from 'fundamental-react/Panel';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Identifier } from 'fundamental-react/Identifier';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const Me = () => {
    let groups = parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token")).groups
    let name =  parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["first_name"]
    let surname = parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["last_name"]
    let duser = parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["login_name"]

    if (!groups instanceof Array) {
        groups = [groups]
    }

    return <Panel style={{ width: "100%" }}>
        <Panel.Header>
            <div style={{ marginRight: "0.75rem" }}>
                <Identifier
                    label={name + " " + surname}
                    size="m"
                >
                    {name.charAt(0) + surname.charAt(0)}
            </Identifier>
            </div>
            <Panel.Head
                title={name + " " + surname}
                description={duser}
            />
        </Panel.Header>
        <Panel.Body style={{ background: "#edeff0" }}>
            <LayoutGrid>
                {
                    groups && groups.map(group =>
                        <Panel>
                            <Panel.Body>
                                {group}
                            </Panel.Body>
                        </Panel>
                    )
                }
            </LayoutGrid>
        </Panel.Body>
    </Panel>
}