import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import './Home.css';
import NavigationBar from'../../components/navigationBar/Navigation.js';
import LeftModule from '../../components/leftModule/LeftModule.js';
import MiddleModule from '../../components/middleModule/MiddleModule.js';
import RightModule from '../../components/rightModule/RightModule.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Row className="modules">
          <Col><LeftModule/></Col>
          <Col><MiddleModule/></Col>
          <Col><RightModule/></Col>
        </Row>
      </div>
    )
  }
};

export default Home;
