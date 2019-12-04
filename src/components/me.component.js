import React from 'react';
import { Panel } from 'fundamental-react/Panel';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Identifier } from 'fundamental-react/Identifier';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const Me = () => {
    console.log(parseJwt(window.sessionStorage.getItem("id_token")))


    return <Panel style={{ width: "100%" }}>
        <Panel.Header>
            <div style={{ marginRight: "0.75rem" }}>
                <Identifier
                    label="John Snow"
                    size="m"
                >
                    JS
            </Identifier>
            </div>
            <Panel.Head
                title="John Snow"
                description="D067044"
            />
        </Panel.Header>
        <Panel.Body style={{ background: "#edeff0" }}>
            <LayoutGrid>
                <Panel>
                    <Panel.Body>
                        ServiceEngineer
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Body>
                        ServiceConsultant
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Body>
                        MarketingExpert
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Body>
                        SalesConsultant
                    </Panel.Body>
                </Panel>
            </LayoutGrid>
        </Panel.Body>
    </Panel>
}