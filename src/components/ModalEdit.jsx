import { Button, Form, Modal } from 'react-bootstrap';

export default function ModalEdit(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="m-3">
          <Form.Group className="mb-3" controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="React Redux"
              value={props.title}
              onChange={props.onEditChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              placeholder="React Redux is state management."
              rows={7}
              value={props.body}
              onChange={props.onEditChange}
            />
          </Form.Group>
        </Form>
        <div className="d-flex flex-wrap justify-content-center">
          <Button variant="warning" onClick={props.onEditSubmit}>
            Edit
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
