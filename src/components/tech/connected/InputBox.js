import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';


export class InputBox extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      myData: ''
    }
  }

  save = (e) => {
    this.props.save(this.props.dataPath, e.target.value);
  }

  componentDidMount() {
    if (this.props.data !== undefined) {
      this.setState({
        myData: this.props.data
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.data, prevProps.data)) {
      this.setState({
        myData: this.props.data
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      myData: e.target.value
    })
  }

  render() {
    const { name } = this.props;
    const { myData } = this.state;

    return (
      <Form.Group>
        <Form.Label>Input {name}</Form.Label>
        <Form.Control type="text" value={myData} onChange={(e) => this.handleChange(e)} onBlur={e => this.save(e)}/>
      </Form.Group>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: _.get(state, ownProps.dataPath)
  }
}

const mapDispatch = (dispatch) => {
  return {
    save: (dataPath, data) => dispatch({ type: 'SAVE', dataPath, data })
  }
}

export default connect(mapStateToProps, mapDispatch)(InputBox);