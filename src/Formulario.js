import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [validated, setValidated] = useState(false);
  const [tabla, setUs] = useState([]);

  const add = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/create', {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
    }).then(() => {
      alert('Usuario Registrado');
    });
  };

  const getUs = () => {
    Axios.get('http://localhost:3001/us').then((response) => {
      setUs(response.data);
    });
  };

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      const filteredTabla = tabla.filter((user) => user.id !== id);
      setUs(filteredTabla);
    });
    };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={add}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Form.Control.Feedback>Please provide a valid nombre.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <Form.Control.Feedback>Please provide a valid apellido.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="correo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Form.Control.Feedback>Please provide a valid correo.</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
      <br />
      <Button variant="primary" onClick={getUs}>
        Obtener Usuarios
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Eliminar
                </Button>
                
                <Button variant="warning">
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Formulario;