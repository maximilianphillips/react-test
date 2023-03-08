import React from 'react';
import axios from 'axios';

export default class Time extends React.Component {
    state = {
        serverEpoch: 0,
        clientTime: "00:00:00",
        isLoading: true
    }

    getServerEpoch() {
        this.setState({ isLoading: true });

        axios.get(`//localhost:8000/time`, {
            headers: {
                'Authorization': 'mysecrettoken'
            }
        }).then(res => {
            const serverEpoch = res.data.epoch;
            this.setState({ serverEpoch });
        })

        this.setState({ isLoading: false });
    }

    updateTimer() {
        var clientTime = Math.floor(new Date().getTime() / 1000);
        var timeDifference = clientTime - this.state.serverEpoch;

        var d = new Date(0);
        d.setUTCSeconds(timeDifference);

        var seconds = d.getSeconds();
        var minutes = d.getMinutes();
        var hours = d.getHours() - 1;

        this.setState({
            clientTime: (hours === 0 ? "00" : (hours >= 10 ? hours : "0" + hours)) +
                ":" + (minutes === 0 ? "00" : (minutes >= 10 ? minutes : "0" + minutes)) +
                ":" + (seconds === 0 ? "00" : (seconds >= 10 ? seconds : "0" + seconds))
        });
    }

    componentDidMount() {
        this.getServerEpoch();
        this.intervalEpoch = setInterval(() => this.getServerEpoch(), 30000);

        this.interval = setInterval(() => this.updateTimer(), 1000);
    }

    render() {
        return (
            this.state.isLoading ? <p>Loading...</p> :
                <div>
                    <p>
                        Server time: {this.state.serverEpoch}
                    </p>
                    <p>
                        Difference between your time and the server time: {this.state.clientTime}
                    </p>
                </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalEpoch);
        clearInterval(this.interval);
    }
}