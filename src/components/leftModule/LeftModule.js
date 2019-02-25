import React, { Component } from 'react';
import {Row, Container} from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import './leftModule.css';

const data = [
  {
    Retweets: 4000, Mentions: 2400, amt: 2400,
  },
  {
    Retweets: 3000, Mentions: 1398, amt: 2210,
  },
  {
    Retweets: 2000, Mentions: 9800, amt: 2290,
  },
  {
    Retweets: 2780, Mentions: 3908, amt: 2000,
  },
  {
    Retweets: 1890, Mentions: 4800, amt: 2181,
  },
  {
    Retweets: 2390, Mentions: 3800, amt: 2500,
  },
  {
    Retweets: 3490, Mentions: 4300, amt: 2100,
  },
];

class LeftModule extends Component {
  render() {
    return (
      <div>
        <h3>Virality</h3>
        <Container>
          <Row><h4>Twitter</h4></Row>
          <Row className="twitter">
            <LineChart width={400} height={250} data={data}
              margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Mentions" stroke="#8884d8" />
              <Line type="monotone" dataKey="Retweets" stroke="#82ca9d" />
            </LineChart>
          </Row>
          <Row><h4>Instagram</h4></Row>
          <Row className="instagram">
            <LineChart width={400} height={250} data={data}
              margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Mentions" stroke="#8884d8" />
              <Line type="monotone" dataKey="Retweets" stroke="#82ca9d" />
            </LineChart>
          </Row>
          <Row><h4>Facebook</h4></Row>
          <Row className="facebook">
            <LineChart width={400} height={250} data={data}
              margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Mentions" stroke="#8884d8" />
              <Line type="monotone" dataKey="Retweets" stroke="#82ca9d" />
            </LineChart>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LeftModule;
