import * as React from 'react';
import { Instrument } from './instrument';
import { Steps } from './steps';
import { InstrumentHack } from './instrument-hack';
import { Transport } from 'tone';
import { PlayPause } from './play';

export class TransportComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            steps: [false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, false],
            selected: null,
        }
        Transport.loop = true;
        Transport.loopEnd = '1m'
    }

    pause = () => {
        Transport.stop();
    }

    play = () => {
        Transport.start();
    }

    private handleStepChange = (id: number) => {
        const s = this.state.steps;
        s[id] = !s[id];
        this.setState({
            steps: s,
        })
    }

    private selectInstrument = (selected: string, steps: boolean[]) => {
        if (this.state.selected === selected) {
            this.setState({
                selected: null, steps: [false, false, false, false, false, false, false, false,
                    false, false, false, false, false, false, false, false]
            })
        } else {
            this.setState({ selected, steps })
        }
    }

    render() {
        return (
            <div>
                <h1>Web-808</h1>
                <PlayPause play={this.play} pause={this.pause} />
                <InstrumentHack steps={this.state.steps} selectedInstrument={this.state.selected}>
                    <Instrument key="Kick" engine="Kick" handleClick={this.selectInstrument} />
                    <Instrument key="Snare" engine="Snare" handleClick={this.selectInstrument} />
                    <Instrument key="Clap" engine="Clap" handleClick={this.selectInstrument} />
                    <Instrument key="HiHat" engine="HiHat" handleClick={this.selectInstrument} />
                </InstrumentHack>
                <Steps handleStepChange={this.handleStepChange} steps={this.state.steps} />
            </div>
        )
    }
}