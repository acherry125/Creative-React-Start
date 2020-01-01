import React from 'react';
import { connect } from 'react-redux';

export class DisplayCount extends React.Component {

  render() {
    console.log('rendering1');
    const { increment } = this.props;
    return (
      <p>Count: {increment}</p>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('statin')
  return {
    increment: state.data.count
  }
};

export default connect(mapStateToProps)(DisplayCount);