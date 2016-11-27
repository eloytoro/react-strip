import React, { Component } from 'react';
import { CheckBox } from './commons';
import Strip from 'Strip';
import { storiesOf } from '@kadira/storybook';


class SampleStrip extends Component {
  state = {
    parallel: 'start',
    perpendicular: 'center',
    direction: 'horizontal'
  }

  renderColumn({
    field,
    options
  }) {
    return (
      <Strip direction="vertical" className="options">
        <h3>{field}</h3>
        {options.map(item => (
          <CheckBox
            key={item}
            label={item}
            value={this.state[field] === item}
            onChange={() => {
              this.setState({
                ...this.state,
                [field]: item
              });
            }}
          />
        ))}
      </Strip>
    );
  }

  render() {
    const { parallel, perpendicular, direction } = this.state;
    const align = `${parallel} ${perpendicular}`;
    return (
      <Strip direction="vertical" align="space-between stretch" fill>
        <Strip align="center start" size="noshrink">
          <code className="code">
            {`<Strip direction="${direction}" align="${align}"/>`}
          </code>
        </Strip>
        <Strip align={align} direction={direction} fill size="grow">
          <div className="item-box" style={{ background: 'blue' }}>
            one
          </div>
          <div className="item-box" style={{ background: 'red' }}>
            two
          </div>
          <div className="item-box" style={{ background: 'green' }}>
            three
          </div>
        </Strip>
        <Strip size="noshrink">
          {this.renderColumn({
            field: 'direction',
            options: ['horizontal', 'vertical']
          })}
          {this.renderColumn({
            field: 'parallel',
            options: ['start', 'center', 'end', 'space-around', 'space-between']
          })}
          {this.renderColumn({
            field: 'perpendicular',
            options: ['start', 'center', 'end', 'stretch']
          })}
        </Strip>
      </Strip>
    );
  }
}

class ResponsiveStrip extends Component {
  render() {
    const aligns = {
      'mobile': 'space-around center',
      'small': 'space-between center',
      'medium': 'end center'
    };

    const directions = {
      'mobile': 'vertical',
      '> mobile': 'horizontal'
    };

    return (
      <Strip align={aligns} direction={directions} fill>
        <div className="item-box" style={{ background: 'blue' }}>
          one
        </div>
        <div className="item-box" style={{ background: 'red' }}>
          two
        </div>
        <div className="item-box" style={{ background: 'green' }}>
          three
        </div>
      </Strip>
    );
  }
}

storiesOf('Strip', module)
  .add('Child Alignment', () => (
    <SampleStrip align="start center" />
  ))
  .add('Responsive Design', () => (
    <ResponsiveStrip />
  ));
