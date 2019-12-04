import React from 'react';
import { Shellbar } from 'fundamental-react/Shellbar';
import { withRouter } from "react-router-dom";

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const Bar = withRouter(({ history }) => {
    
    let name =  parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["first_name"]
    let surname = parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["last_name"]
    let duser = parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["login_name"]

    return <Shellbar
        logo={<img alt="SAP" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" />}
        productTitle="Service Cloud Cockpit"
        profile={{
            colorAccent: 8,
            initials: name.charAt(0) + surname.charAt(0),
            userName: name + " " + surname
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
}
);
