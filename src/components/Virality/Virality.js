import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {Row, Container} from 'react-bootstrap';


import data from '../../assets/data/chartData.js';

class Virality extends React.Component {
    constructor(props){
      super(props);
      this.sectionTitle = props.sectionTitle;
    }
    render(props) {
      return (
        <div>
          <Row><h4>{this.sectionTitle}</h4></Row>
          <Row>
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

        </div>
    )}
};

export default Virality;
