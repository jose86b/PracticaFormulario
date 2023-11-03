import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

function Formulario() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            
          />
          <Form.Control.Feedback>Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apeilldo"
            
          />
          <Form.Control.Feedback>Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="apellido">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Correo"
            
          />
          <Form.Control.Feedback>Bien!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button type="submit">Guardar</Button>
    </Form>
  );
}

export default Formulario;