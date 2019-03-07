import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



class Changelog extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}


export default Changelog;
