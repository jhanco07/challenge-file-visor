import React from 'react';

import Container from 'react-bootstrap/Container';
import TableComponent from '../components/table-component'; 



const HomePage = () => {
  return (
    <Container>
      <h1>Tabla Centrada con Cuatro Columnas</h1>
      <TableComponent />
  </Container>
  );
};

export default HomePage;