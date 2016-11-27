import React, { Component } from 'react';
import { CheckBox } from './commons';
import Stretch from 'Stretch';
import Strip from 'Strip';
import { storiesOf } from '@kadira/storybook';


class SampleStretch extends Component {
  state = {
    sizes: [33, 33, 33],
    wrap: false,
    direction: 'horizontal'
  }

  renderRange(index) {
    const { sizes } = this.state;
    const setSize = (value) => {
      this.setState({
        ...this.state,
        sizes: [
          ...sizes.slice(0, index),
          value,
          ...sizes.slice(index + 1)
        ]
      });
    };

    const remove = () => {
      this.setState({
        ...this.state,
        sizes: [
          ...sizes.slice(0, index),
          ...sizes.slice(index + 1)
        ]
      });
    };

    const size = this.state.sizes[index];

    const altSizes = [33, 66, 'grow', 'nogrow', 'noshrink', 'auto'];

    return (
      <Strip direction="horizontal" key={index}>
        <h3>{index}</h3>
        <input
          onChange={event => setSize(event.target.value * 5)}
          defaultValue={Math.floor(size/5)}
          type="range"
          min="0"
          max="20"
        />
        {altSizes.map(size => (
          <button onClick={() => setSize(size)} key={size}>
            {size}
          </button>
        ))}
        <button onClick={remove}>
          {'-'}
        </button>
      </Strip>
    );
  }

  renderConfig() {
    const setDirection = direction => () => {
      this.setState({
        ...this.state,
        direction
      });
    };

    const toggleWrap = () => {
      this.setState({
        ...this.state,
        wrap: !this.state.wrap
      });
    };

    const addOne = () => {
      this.setState({
        ...this.state,
        sizes: [...this.state.sizes, 33]
      });
    };

    return (
      <Strip direction="horizontal" align="space-around center">
        <Strip direction="vertical">
          <CheckBox
            label={'horizontal'}
            checked={this.state.direction === 'horizontal'}
            onChange={setDirection('horizontal')}
          />
          <CheckBox
            label={'vertical'}
            checked={this.state.direction === 'vertical'}
            onChange={setDirection('vertical')}
          />
          <CheckBox
            label={'Wrap'}
            checked={this.state.wrap}
            onChange={toggleWrap}
          />
          </Strip>
          <Strip direction="vertical">
            <button onClick={addOne}>
              {'+'}
            </button>
          {this.state.sizes.map((size, index) => this.renderRange(index))}
        </Strip>
      </Strip>
    );
  }

  render() {
    const { wrap, sizes, direction } = this.state;
    return (
      <Strip direction="vertical" fill>
        <Strip direction={direction} wrap={wrap} align="center center" size="auto">
          {sizes.map((size, index) => (
            <Stretch size={size} key={index} className="box">
              {size}
            </Stretch>
          ))}
        </Strip>
      {this.renderConfig()}
    </Strip>
    );
  }
}

class ResponsiveStretch extends Component {
  render() {
    return (
      <Strip align="center center" fill>
        <Stretch size={{ 'mobile': 25, 'small': 20, 'medium': 10 }} className="box">
          {'1'}
        </Stretch>
        <Stretch size={{ 'mobile': 20, 'small': 20, 'medium': 15 }} className="box">
          {'2'}
        </Stretch>
        <Stretch size={{ 'mobile': 15, 'small': 20, 'medium': 20 }} className="box">
          {'3'}
        </Stretch>
        <Stretch size={{ 'mobile': 10, 'small': 20, 'medium': 25 }} className="box">
          {'4'}
        </Stretch>
      </Strip>
    );
  }
}


storiesOf('Stretch', module)
  .add('Multiple Elements', () => (
    <SampleStretch />
  ))
  .add('Responsive Design', () => (
    <ResponsiveStretch />
  ));
