import React, { Component } from 'react';
import moment from 'moment';
import { render } from 'react-dom';
import ReactGantt, { GanttRow } from '../src';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ReactGantt
          templates={{
            inProgress: {
              title: 'In Progress',
              steps: [
                {
                  color: '#E50000'
                },
                {
                  color: '#757575'
                }
              ]
            },
            completed: {
              title: 'Completed',
              steps: [
                {
                  color: '#E50000'
                }
              ]
            }
          }}
          leftBound={moment().set({ date: 1, month: 3, year: 2022})}
          rightBound={moment().set({ date: 31, month: 2, year: 2023})}
          monthFormat="MMM"
        >
          <GanttRow
            title="Task 1"
            templateName="inProgress"
            steps={[
              moment().set({ date: 1, month: 3, year: 2022}),
              moment().set({ date: 1, month: 4, year: 2022}),
              moment().set({month: 6, year: 2022})
            ]}
            markerStyle={{
              width: '0px',
              backgroundColor: '#000000'
            }}
            barStyle={{
              height: '20px',
              marginTop: '10px',
              marginBottom: '10px'
            }}
          />
          <GanttRow
            title="Task 2"
            templateName="completed"
            steps={[
              moment().set({ date: 15, month: 6, year: 2022}),
              moment().set({ date: 30, month: 8, year: 2022})
            ]}
            markerStyle={{
              width: '0px'
            }}
            barStyle={{
              height: '20px',
              marginTop: '10px',
              marginBottom: '10px'
            }}
          />
          <GanttRow
            title="Task 3"
            templateName="inProgress"
            steps={[
              moment().set({ date: 1, month: 9, year: 2022}),
              moment().set({ date: 12, month: 0, year: 2023}),
              moment().set({ date: 16, month: 1, year: 2023})
            ]}
            markerStyle={{
              width: '0px'
            }}
            barStyle={{
              height: '20px',
              marginTop: '10px',
              marginBottom: '10px'
            }}
          />
        </ReactGantt>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
render(<Demo />, document.getElementById('demo'));
