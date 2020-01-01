import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

export const ButtonIncrement = (props) => {
  return (
    <Button onClick={() => props.incrementCount()}>
      Here {props.increment}
    </Button>
  )
}

const mapStateToProps = (state) => ({
  increment: state.data.count
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => {
    return dispatch({ type: 'Increment' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonIncrement);