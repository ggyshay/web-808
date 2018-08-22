import * as React from 'react';

export class PlayPause extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
        }
    }

    public handleClick = () => {
        if (this.state.playing) {
            this.props.pause();
        } else {
            this.props.play();
        }
        this.setState({
            playing: !this.state.playing
        });
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.playing ? 'Pause' : 'Play'}
            </button>
        );
    }
}