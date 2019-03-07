import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import Changelog from '../Changelog/Changelog';
import js from '../../assets/JS.png';
import css from '../../assets/CSS.png';
import gitkraken from '../../assets/GitKraken.png';
import html from '../../assets/HTML.png';
import node from '../../assets/Node.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';



import './MiddleModule.css';


class MiddleModule extends Component {
  render() {
    return (
      <div>
        <h3 className="sectionHeading">ChangeLog</h3>
          <Changelog/>
        <h3> Tools/Tech </h3>
        <Row className="techIcons">
          <Col>
            <Image className="Icons" src={js} rounded />
            <Image className="Icons" src={css} rounded />
            <Image className="Icons" src={gitkraken} rounded />
            <Image className="Icons" src={html} rounded />
            <Image className="Icons" src={node} rounded />
            <Image className="Icons" src={react} rounded />
            <Image className="Icons" src={redux} rounded />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MiddleModule;
