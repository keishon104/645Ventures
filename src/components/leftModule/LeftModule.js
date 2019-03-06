import React, { Component } from 'react';
import {Row, Container} from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Virality from '../Virality/Virality';
import './leftModule.css';



// const viralityComponent = productData.map(product => <Col sm={4}> <Product1 key={product.id} title={product.title} imageUrl={product.imageUrl} description={product.description} price={product.price} location={product.location}/> </Col>)

class LeftModule extends Component {
  render() {
    return (
      <div>
        <h3>Virality Metrics</h3>
        <Container>
          <Virality sectionTitle="Twitter"/>
          <Virality sectionTitle="Instagram"/>
          <Virality sectionTitle="Facebook"/>
        </Container>
      </div>
    );
  }
}

export default LeftModule;
