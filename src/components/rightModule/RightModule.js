import React, { Component } from 'react';
import {Row, Container} from 'react-bootstrap';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Bar} from 'recharts';

import FinancialGraphs from '../Financials/FinancialGraphs';
import './RightModule.css';


class RightModule extends Component {
  render() {
    return (
      <div>
        <h3>Financials</h3>
        <Container>
          <FinancialGraphs sectionTitle="MMR"/>
          <FinancialGraphs sectionTitle="Market"/>
          <FinancialGraphs sectionTitle="Revenue"/>
        </Container>
      </div>
    );
  }
}

export default RightModule;
