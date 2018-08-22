import * as React from 'react';

export class Instrument extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => console.log('Biiing')}>
                    Instrument
                </button>
            </div>
        )
    }
}