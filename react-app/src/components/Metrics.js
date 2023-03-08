import React from 'react';
import axios from 'axios';

export default class Metrics extends React.Component {
  state = {
    metrics: "",
    isLoading: true
  }

  getMetrics() {
    this.setState({ isLoading: true })

    axios.get(`//localhost:8000/metrics`, {
      headers: {
        'Authorization': 'mysecrettoken'
      }
    }).then(res => {
        console.log(res);
        const metrics = res.data;
        this.setState({ metrics });
      })

    this.setState({ isLoading: false })
  }

  componentDidMount() {
    this.getMetrics();

    this.intervalEpoch = setInterval(() => this.getMetrics(), 30000);
  }

  render() {
    return (
      this.state.isLoading ? <p>Loading ...</p> : <pre>{this.state.metrics}</pre>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval);
}
}