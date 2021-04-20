import React from 'react';
import { Container } from 'reactstrap';
import HeaderSale from './component/HeaderSale';
import Carousel from './component/carousel';
import BodySale from './component/BodySale';
import './component/HeaderSale.css';

App.propTypes = {

};

function App() {
  return (
    <>
      <Container>
        <HeaderSale />
        <Carousel />
        <h2 className="ngan">Menu</h2>
        <BodySale />
      </Container>
    </>
  );
}

export default App;