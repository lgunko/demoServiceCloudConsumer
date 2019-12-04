import React from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Bar } from './bar.component'
import { NavBar } from './navbar.component'
import { MyTable } from './table.component'
import { Groups } from './groups.component'
import { Me } from './me.component'
import { Entitlements } from './entitlements.component'
import { Welcome } from './welcome.component';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const queryString = require('query-string');


const LoginURL = "https://c4id-iam-test-one.accounts400.ondemand.com/oauth2/authorize";


const RedirectUrl = "https://aa4tm323i6.execute-api.eu-central-1.amazonaws.com/Prod/callbackGetTokenByCode";
const IasClientId = "T000003";
const OIDCScope = "openid";
const CodeResponseType = "code";
const State = "longstatestate";


export class MainComponent extends React.Component {

    /*componentDidMount() {
        console.log(window.sessionStorage.getItem("id_token"))
        if (!window.sessionStorage.getItem("id_token")) {
            if (queryString.parse(window.location.search).id_token) {
                window.sessionStorage.setItem("id_token", queryString.parse(window.location.search).id_token)
                window.location = window.location.origin
            } else {
                const redirectToUrl = new URL(LoginURL);
                redirectToUrl.searchParams.append('redirect_uri', RedirectUrl);
                redirectToUrl.searchParams.append('client_id', IasClientId);
                redirectToUrl.searchParams.append('scope', OIDCScope);
                redirectToUrl.searchParams.append('response_type', CodeResponseType);
                redirectToUrl.searchParams.append('state', State);
                window.location = redirectToUrl
            }
        }
    }*/

    render() {
        return (
            //window.sessionStorage.getItem("id_token") &&
            <BrowserRouter>
                <ThemeProvider withToastContainer>
                    <div style={{ height: "100%" }}>
                        <Bar />
                        <div style={{ display: "flex", height: "calc(100% - 40px)" }}>
                            <NavBar />
                            <div style={{ width: "100%" }}>
                                <Switch>
                                    <Route exact path="/">
                                        <Welcome />
                                    </Route>
                                    <Route path="/serviceCloud">
                                        <MyTable />
                                    </Route>
                                    <Route path="/security">
                                        <Groups />
                                    </Route>
                                    <Route path="/entitlements">
                                        <Entitlements />
                                    </Route>
                                    <Route path="/me">
                                        <Me />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        )
    }

}