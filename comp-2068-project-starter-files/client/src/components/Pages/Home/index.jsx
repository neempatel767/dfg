import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Get your Keyboard customized">
          <p>
            We got all the customization options available  in the <strong>Get yours now!</strong>.
          </p>
        </Header>


      <Container>
        <hr/>

        <p>
          The content is editable under <strong>/src/components/Pages/Home/index.jsx</strong>
        </p>

        <p>You home page content!</p>
      </Container>
    </>
  );
}
 
export default Home;