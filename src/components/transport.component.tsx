import * as React from 'react';
import { Instrument } from './instrument';

export class TransportComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Web-808</h1>
                <Instrument />
            </div>
        )
    }
}