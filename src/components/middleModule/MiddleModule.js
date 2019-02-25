import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        <h3>ChangeLog</h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1/27/19"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h4 className="vertical-timeline-element-subtitle">Initial Commit</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2/01/19"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h4 className="vertical-timeline-element-subtitle">DS API: WIP</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2/15/19"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h4 className="vertical-timeline-element-subtitle">New API: GCX</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2/20/19"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h4 className="vertical-timeline-element-subtitle">LSNSE: no new profile added fix</h4>

          </VerticalTimelineElement>
        </VerticalTimeline>

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
