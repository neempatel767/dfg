import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Keyboard">
        Hi I'm a man-child.
      </Header>

      <Container>
        <Form endpoint="keyboard"/>
      </Container>
    </>
  );
}
 
export default New;