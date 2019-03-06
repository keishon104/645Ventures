import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Bar} from 'recharts';

import {Row, Container} from 'react-bootstrap';


import data from '../../assets/data/financialData.js';

class FinancialGraphs extends React.Component {
    constructor(props){
      super(props);
      this.sectionTitle = props.sectionTitle;
    }
    render(props) {
      return (
        <div>
          <h4>{this.sectionTitle}</h4><br/>
          <Row>
            <BarChart
              width={500}
              height={250}
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

        </div>
    )}
};

export default FinancialGraphs;
