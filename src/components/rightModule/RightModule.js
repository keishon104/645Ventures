import React, { Component } from 'react';
import {Row, Container} from 'react-bootstrap';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Bar} from 'recharts';

import './RightModule.css';



const data = [
  {
    Positive: 4000, Negative: 2400, amt: 2400,
  },
  {
    Positive: -3000, Negative: 1398, amt: 2210,
  },
  {
    Positive: -2000, Negative: -9800, amt: 2290,
  },
  {
    Positive: 2780, Negative: 3908, amt: 2000,
  },
  {
    Positive: -1890, Negative: 4800, amt: 2181,
  },
  {
    Positive: 2390, Negative: -3800, amt: 2500,
  },
  {
    Positive: 3490, Negative: 4300, amt: 2100,
  },
];

class RightModule extends Component {
  render() {
    return (
      <div className="rightModule">
        <Container>
          <h3>Financials</h3>
          <Row className="mmr">
            <h4>MMR</h4><br/>
            <Row>
              <BarChart
                width={500}
                height={300}
                data={data}
                stackOffset="sign"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Negative" fill="#8884d8" stackId="stack" />
                <Bar dataKey="Positive" fill="#82ca9d" stackId="stack" />
              </BarChart>
            </Row>
          </Row>
          <Row className="market">
            <h4>Market Size</h4>
            <Row>
              <BarChart
                width={500}
                height={300}
                data={data}
                stackOffset="sign"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Negative" fill="#8884d8" stackId="stack" />
                <Bar dataKey="Positive" fill="#82ca9d" stackId="stack" />
              </BarChart>
            </Row>
          </Row>
          <Row className="cashFlow">
            <Row><h4>Cash Flow</h4></Row>
            <Row>
              <BarChart
                width={500}
                height={300}
                data={data}
                stackOffset="sign"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Negative" fill="#8884d8" stackId="stack" />
                <Bar dataKey="Positive" fill="#82ca9d" stackId="stack" />
              </BarChart>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RightModule;
