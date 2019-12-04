import React from 'react';
import { Shellbar } from 'fundamental-react/Shellbar';
import { withRouter } from "react-router-dom";

export const Bar = withRouter(({ history }) =>
    <Shellbar
        logo={<img alt="SAP" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" />}
        productTitle="Service Cloud Cockpit"
        profile={{
            colorAccent: 8,
            initials: 'JS',
            userName: 'John Snow'
        }}
        profileMenu={[
            {
                callback: () => {
                    history.push("/me");
                },
                glyph: 'employee',
                name: 'Data',
                size: 's'
            },
            {
                callback: function S() { },
                glyph: 'log',
                name: 'Sign Out',
                size: 's'
            }
        ]}
    />
);
