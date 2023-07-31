import React from 'react';

import Container from 'react-bootstrap/Container';
import TableComponent from '../components/table-component'; 



const HomePage = () => {
  return (
    <Container>
      <Container className="fluid d-flex full-screen-container ">React Test App</Container>
      <TableComponent />
  </Container>
  );
};

export default HomePage;