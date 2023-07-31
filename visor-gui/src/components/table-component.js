import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { setData } from '../reducers/files-reducer';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const TableComponent = () => {
    const data = useSelector((state) => state.filesReducer.data); // Acceder al estado de Redux
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const queryParameters = new URLSearchParams(window.location.search);
            const fileName = queryParameters.get("fileName");
            var url ='http://localhost:3000/v1/files/data';
            if(fileName){
               url =`${url}?fileName=${fileName}`;
            }
            var response = await axios.get(url);
            dispatch(setData(response.data)); 
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
    
        fetchData();
      }, [dispatch]); 

    return (
        <Container className="table_position fluid">
        <Table striped className="table-bordered" >
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th >Hex</th>
            </tr>
            <tr  className="custom-border-row"></tr>
          </thead>
          <tbody >
          {data.map((file, index) => (
            file.lines.map((line, i) => (
              <tr key={i} className={i % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          ))}
        </tbody>
        </Table>
      </Container>
      );
    };

  export default TableComponent; 
  