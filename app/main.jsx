
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    RadialGauge
} from '@progress/kendo-react-gauges';

class RadialGaugeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    value: Math.ceil(Math.random() * 100)
                });
            },
            1000);
    }

    render() {
        const radialOptions = {
            pointer: {
                value: this.state.value
            }
        };

        return (
            <RadialGauge {...radialOptions} />
        );
    }
}

ReactDOM.render(
    <RadialGaugeComponent />,
    document.querySelector('my-app')
);

