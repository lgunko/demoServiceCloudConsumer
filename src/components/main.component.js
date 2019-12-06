import React from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Bar } from './bar.component'
import { NavBar } from './navbar.component'
import { MyTable } from './table.component'
import { Groups } from './groups.component'
import { Me } from './me.component'
import { Entitlements } from './entitlements.component'
import { Welcome } from './welcome.component';
import { Clients } from './clients.component'
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

    componentDidMount() {
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
        //window.sessionStorage.setItem("id_token", "eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUMDAwMDAzIiwic3ViIjoiUDAwMDAwMiIsImxvZ2luX25hbWUiOiJEMDY3MDQ0IiwibWFpbCI6Imxlb25pZC5ndW5rb0BzYXAuY29tIiwiaXNzIjoiaHR0cHM6XC9cL2M0aWQtaWFtLXRlc3Qtb25lLmFjY291bnRzNDAwLm9uZGVtYW5kLmNvbSIsImdyb3VwcyI6WyJEZXZlbG9wZXJPZkNvY2twaXRUZW5hbnQxIiwiQ29ja3BpdEFkbWluaXN0cmF0b3IiLCJWaWV3ZXIiLCJTZXJ2aWNlRW5naW5lZXIiLCJTZXJ2aWNlQ29uc3VsdGFudCJdLCJsYXN0X25hbWUiOiJHdW5rbyIsImV4cCI6MTU3NTQ2MzU4NiwiaWF0IjoxNTc1NDYzMjg2LCJmaXJzdF9uYW1lIjoiTGVvbmlkIiwianRpIjoiMzU2MGYxNmEtMTRlZi00NGJlLWI4NjEtMWY3ZDljNTI0M2IzIn0.Tg0enYvR3x_xLSVnDrBeZFJJXJEZp-_41u3GfisYIhgAlf8zBf8DH2TycSU6raPfQfxgisaElnr4WzNFHEOFBrrUOtPx2NUO6zVGlO5u8luOb97c5VgBzIu16QNu6jbmvY0cxTG0kwYxBcYgyPLiEn4ztgsnCmYo_SMOF-U-eCQNtj0Hac-66hQIL2O5ZbMtu91TYbIG5YT_CdhyReVg_z0xgWhaR448AiENzBJrtuZQMIPryWZqwo1TSUa2k3E9ZTNNLSRhhMbC4JZXu3hrk_8KBEqSuW59c_2tVINdt7xakg2_uWyp1MN43Y9UrruVaKV_TQ_TwVTh3AUg7gch8Q")
    }

    render() {
        return (
            window.sessionStorage.getItem("id_token") &&
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
                                    <Route path="/clients">
                                        <Clients />
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