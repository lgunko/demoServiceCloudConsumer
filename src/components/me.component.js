import React from 'react';
import { Panel } from 'fundamental-react/Panel';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Identifier } from 'fundamental-react/Identifier';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';

export const Me = () =>
    <Panel style={{ width: "100%" }}>
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