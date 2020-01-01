import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonIncrement from 'components/tech/connected/ButtonIncrement';
import DisplayCount from 'components/tech/connected/DisplayCount';
import InputBox from './connected/InputBox';

export const Tech = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <DisplayCount />
          <ButtonIncrement />
          <InputBox name="Test 1" dataPath={'a.b.c'}/>
          <InputBox name="Test 2" dataPath={'a.b.d'}/>
          <InputBox name="Test 2" dataPath={'a.b.e'}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Tech;